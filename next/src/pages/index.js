import { useFetch } from "@/hooks/useFetch";
import BioCard from "@/components/BioCard";
import { baseURL } from "@/lib/fetchConfig";

export default function Home() {
  const { swr, errorMsg, loadingMsg } = useFetch();
  const { data, error } = swr({ url: `/u` });

  if (error) return errorMsg;
  if (!data) return loadingMsg;

  return (
    <div className="card-layout">
      {data.map((x) => {
        return (
          <BioCard
            key={x._id}
            user={{
              _id: x._id,
              _dset: true,
              _isLink: true,
              username: x.username,
              content: x.markdown,
              fileUrl: baseURL + "/" + x.file_path,
              bgcolor: x.bgcolor,
              color: x.color,
            }}
          />
        );
      })}
    </div>
  );
}
