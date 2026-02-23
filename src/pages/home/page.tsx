import BreadCrumb from "@/components/BreadCrumb";
import { ComboBox } from "@/components/ComboBox";
import { useFormContext } from "@/context/hooks";
import type { getData } from "@/service";
import { useLoaderData } from "react-router";

const Page = () => {
  const { provinces, regencies, districts } = useLoaderData<typeof getData>();
  const { form, handleChange, handleReset } = useFormContext();

  return (
    <div className="grid grid-cols-[320px_1fr]">
      <aside className="h-screen bg-[#f9fafc] border-r-2 border-gray-200">
        <section className="h-16 flex items-center justify-center">
          <h1 className="font-bold text-xl flex items-center justify-center gap-2">
            <img
              src="/vite.svg"
              alt="logo"
              className="h-6 w-6 object-contain"
            />
            Frontend Assesment
          </h1>
        </section>
        <section className="p-6 space-y-8">
          <h4 className="text-gray-400 text-sm tracking-widest">
            FILTER WILAYAH
          </h4>

          <div>
            <h3 className="text-base mb-2 font-bold text-gray-500">PROVINSI</h3>
            <ComboBox
              name="province"
              data={provinces ?? []}
              value={form.province}
              onChange={handleChange}
              getLabel={(item) => item?.name ?? ""}
              placeholder="Pilih Province"
            />
          </div>

          <div>
            <h3 className="text-base mb-2 font-bold text-gray-500">
              KOTA / KABUPATEN
            </h3>
            <ComboBox
              name="regencies"
              data={
                regencies.filter((e) => e.province_id === form.province?.id) ??
                []
              }
              value={form.regencies}
              onChange={handleChange}
              getLabel={(item) => item?.name ?? ""}
              placeholder="Pilih Regencies"
              disabled={!form.province}
            />
          </div>

          <div>
            <h3 className="text-base mb-2 font-bold text-gray-500">
              KECAMATAN
            </h3>
            <ComboBox
              name="districts"
              data={
                districts.filter((e) => e.regency_id === form.regencies?.id) ??
                []
              }
              value={form.districts}
              onChange={handleChange}
              getLabel={(item) => item?.name ?? ""}
              placeholder="Pilih Districts"
              disabled={!form.regencies}
            />
          </div>

          <div>
            <button
              className="w-full border-2 border-violet-600 rounded-md px-3 py-2 mt-8  bg-white disabled:bg-gray-200"
              onClick={handleReset}
            >
              RESET
            </button>
          </div>
        </section>
      </aside>

      <div>
        <header className="h-16 sticky top-0 flex items-center p-6 border-b-2 border-gray-200">
          <BreadCrumb />
        </header>

        <main className="flex flex-col gap-40 items-center justify-center h-[calc(100vh-4rem)] overflow-auto bg-[#f9fafc]">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-blue-400 fomt-bold">PROVINSI</div>
            <h2 className="text-7xl font-bold">{form.province?.name ?? ""}</h2>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-blue-400 fomt-bold">KOTA / KABUPATEN</div>
            <h2 className="text-7xl font-bold">{form.regencies?.name ?? ""}</h2>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-blue-400 fomt-bold">KECAMATAN</div>
            <h2 className="text-7xl font-bold">{form.districts?.name ?? ""}</h2>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
