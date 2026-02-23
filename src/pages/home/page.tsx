import BreadCrumb from "@/components/BreadCrumb";
// import { ComboBox } from "@/components/ComboBox";
import { useFormContext } from "@/context/hooks";
// import type { getData } from "@/service";
// import { useLoaderData } from "react-router";

const Page = () => {
  // const { provinces, regencies, districts } = useLoaderData<typeof getData>();
  // const { form, handleChange, handleReset } = useFormContext();
  const { form } = useFormContext();

  // return (
  //   <>
  //     <ComboBox
  //       name="province"
  //       data={provinces ?? []}
  //       value={form.province}
  //       onChange={handleChange}
  //       getLabel={(item) => item?.name ?? ""}
  //       placeholder="Pilih Province"
  //     />

  //     <ComboBox
  //       name="regencies"
  //       data={
  //         regencies.filter((e) => e.province_id === form.province?.id) ?? []
  //       }
  //       value={form.regencies}
  //       onChange={handleChange}
  //       getLabel={(item) => item?.name ?? ""}
  //       placeholder="Pilih Regencies"
  //       disabled={!form.province}
  //     />

  //     <ComboBox
  //       name="districts"
  //       data={
  //         districts.filter((e) => e.regency_id === form.regencies?.id) ?? []
  //       }
  //       value={form.districts}
  //       onChange={handleChange}
  //       getLabel={(item) => item?.name ?? ""}
  //       placeholder="Pilih Districts"
  //       disabled={!form.regencies}
  //     />

  //     <button onClick={handleReset}>Reset</button>

  //     <>
  //       <div>{form.province?.name ?? ""}</div>
  //       <div>{form.regencies?.name ?? ""}</div>
  //       <div>{form.districts?.name ?? ""}</div>
  //     </>

  //     <BreadCrumb />
  //   </>
  // );

  return (
    <div className="grid grid-cols-[320px_1fr]">
      <aside className="h-screen bg-yellow-400">Emil</aside>

      <div>
        <header className="h-16 sticky top-0 flex items-center p-6 shadow-md">
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
