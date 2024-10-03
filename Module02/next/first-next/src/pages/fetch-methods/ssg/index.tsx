import { getProducts, Product } from "@/utils/api";

function SSGPage({ data, error }: any) {
  if (error) {
    return (
      <div className="w-screen h-screen bg-white flex justify-center items-center">
        <h2 className="text-orange-700 font-semibold text-2xl">
          Something went wrong, please refresh this page
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-white justify-center items-center">
      <div className="grid grid-cols-2 gap-5">
        {data &&
          data?.map((product: Product, key: number) => {
            return (
              <div key={key} className="flex flex-col text-slate-700 space-y3">
                <h2 className="font-semibold">{product.title}</h2>
                <p>{product.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// fungsi getStaticProps untuk mengambil data di server saat build
export async function getStaticProps() {
  try {
    const response = await getProducts();
    if (!response) {
      throw new Error("No data returned from the server");
    }
    return {
      props: {
        data: response,
      },
      revalidate: 10, // halaman akan diregenerasi di background setiap 10 detik
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

export default SSGPage;
