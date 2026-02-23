import { ComboBox } from "@/components/ComboBox";
import { useFormContext } from "@/context/hooks";
import type { getData } from "@/service";
import { useLoaderData } from "react-router";

const Page = () => {
  const { provinces, regencies, districts } = useLoaderData<typeof getData>();
  const { form, handleChange, handleReset } = useFormContext();

  return (
    <>
      <ComboBox
        name="province"
        data={provinces ?? []}
        value={form.province}
        onChange={handleChange}
        getLabel={(item) => item?.name ?? ""}
        placeholder="Pilih Province"
      />

      <ComboBox
        name="regencies"
        data={
          regencies.filter((e) => e.province_id === form.province?.id) ?? []
        }
        value={form.regencies}
        onChange={handleChange}
        getLabel={(item) => item?.name ?? ""}
        placeholder="Pilih Regencies"
        disabled={!form.province}
      />

      <ComboBox
        name="districts"
        data={
          districts.filter((e) => e.regency_id === form.regencies?.id) ?? []
        }
        value={form.districts}
        onChange={handleChange}
        getLabel={(item) => item?.name ?? ""}
        placeholder="Pilih Districts"
        disabled={!form.regencies}
      />

      <button onClick={handleReset}>Reset</button>

      <>
        <div>{form.province?.name ?? ""}</div>
        <div>{form.regencies?.name ?? ""}</div>
        <div>{form.districts?.name ?? ""}</div>
      </>
    </>
  );
};

export default Page;
