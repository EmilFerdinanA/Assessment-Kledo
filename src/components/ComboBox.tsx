import { useEffect, useRef, useState } from "react";

interface IProps<T, K extends string> {
  data: T[];
  value: T | null;
  name: K;
  onChange: (name: K, item: T | null) => void;
  getLabel: (item: T) => string;
  placeholder?: string;
  disabled?: boolean;
}

export function ComboBox<T, K extends string>({
  data,
  value,
  name,
  onChange,
  getLabel,
  placeholder = "Select option...",
  disabled,
}: IProps<T, K>) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredData = data.filter((item) =>
    getLabel(item).toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className="w-full border rounded-md px-3 py-2 text-left bg-white disabled:bg-gray-200"
      >
        {value ? getLabel(value) : placeholder}
      </button>

      {open && (
        <div className="absolute mt-1 w-full border rounded-md bg-white shadow-md z-50 overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border-b outline-none"
          />

          <ul className="max-h-48 overflow-y-auto">
            {filteredData.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-500">No data found</li>
            )}

            {filteredData.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  onChange(name, item);
                  setOpen(false);
                  setSearch("");
                }}
                className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                  value === item ? "bg-gray-200" : ""
                }`}
              >
                {getLabel(item)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
