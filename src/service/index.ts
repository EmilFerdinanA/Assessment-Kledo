import type { IResponseData } from "@/interface/dao";

export async function getData(): Promise<IResponseData> {
  const [provRes, regRes, distRes] = await Promise.all([
    fetch("/data/provinces.json"),
    fetch("/data/regencies.json"),
    fetch("/data/districts.json"),
  ]);

  return {
    provinces: await provRes.json(),
    regencies: await regRes.json(),
    districts: await distRes.json(),
  };
}
