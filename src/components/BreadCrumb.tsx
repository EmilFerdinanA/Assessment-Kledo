import { useFormContext } from "@/context/hooks";

const BreadCrumb = () => {
  const { form } = useFormContext();

  const items = Object.values(form).filter(Boolean);

  return (
    <div className="breadcrumb">
      <span className="after:content-['>'] after:mx-4">Indonesia</span>
      {items.map((item, index) => (
        <span
          key={index}
          className="not-last:after:content-['>'] after:mx-4 last:text-blue-400"
        >
          {item?.name}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
