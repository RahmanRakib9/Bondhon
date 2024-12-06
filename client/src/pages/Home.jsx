import data from '../../data';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <section className="space-y-10 mt-32">
      <div className="flex justify-center content-center py-10 px-2">
        <div className="space-y-8 text-center">
          <h3 className="text-2xl md:text-5xl font-semibold text-textPrimary">কৃষক ও ক্রেতার মধ্যে সেতুবন্ধন</h3>
          <p className="text-md md:text-2xl text-textSecondary">ন্যায্য ও প্রতিযোগিতামুলক মুল্যের সেরা সমাধান</p>

          {/* <div className="space-x-5 text-center mx-auto ">
            <button className="text-md btn btn-outline  border-[#f4f4f4] text-textSecondary">
              এখনই ক্রয় শুরু করুন
            </button>
            <button className="btn btn-outline border-[#ffffff] text-textSecondary">কৃষক হিসাবে যোগ দিন</button>
          </div> */}
        </div>
      </div>

      <div className="grid md:grid-cols-2 my-40">
        <div className="left text-3xl p-5 flex justify-center items-center">
          <p className="border-[3px] border-[#e5e5e5] rounded-lg py-8 px-5 h-min text-textSecondary leading-relaxed">
            গ্রামীন সাপ্রদায়কে ক্ষমতায়িত করতে এবং সরাসরি উতপাদন থেকে ক্রেতাদের সাথে সংযোগ স্থাপনের সহজ প্ল্যাটফর্ম।
          </p>
        </div>
        <div className="right p-5">
          <img
            src="https://img.freepik.com/premium-photo/happy-asian-man-farmer-with-smiling-face-hand-holding-smart-phone-standing-rice-farm-cash-subsidy-concept_55716-3406.jpg"
            className="rounded-md"
            alt=""
          />
        </div>
      </div>

      <div>
        <h3 className="text-3xl text-center py-10 text-textPrimary">পণ্যের তালিকা</h3>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
          {data.map(item => (
            <ProductCard productData={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
