import { useFormContext } from "@/context/hooks";

const BreadCrumb = () => {
  const { form } = useFormContext();

  const items = Object.values(form).filter(Boolean);

  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="not-last:after:content-['>'] after:mx-2">
          {item?.name}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
