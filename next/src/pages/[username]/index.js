import { useRouter } from "next/router";
import { useFetch } from "@/hooks/useFetch";
import BioCard from "@/components/BioCard";
import { baseURL } from "@/lib/fetchConfig";

export default function Page() {
  const router = useRouter();

  const { swr, loadingMsg, errorMsg } = useFetch();
  const { data, error } = swr({
    url: router.isReady ? `/u/${router.query.username}` : null,
  });

  if (error) return errorMsg;
  if (!data) return loadingMsg;
  console.log(data.markdown)

  return (
    <div className="layout-body">
      <BioCard
        user={{
          _id: data._id,
          _dset: true,
          _isLink: false,
          username: data.username,
          content: data.markdown,
          fileUrl: baseURL + "/" + data.file_path,
          bgcolor: data.bgcolor,
          color: data.color,
        }}
      />
    </div>
  );
}
