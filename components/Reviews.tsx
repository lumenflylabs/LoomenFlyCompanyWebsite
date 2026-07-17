import { REVIEWS } from "@/lib/constants";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#18160E] text-[#F6F5ED] py-[clamp(80px,10vw,160px)] px-[clamp(24px,5%,120px)]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 mb-6">
            <span className="font-sans font-bold text-[13px] text-[#FFD100] uppercase tracking-widest">
              {REVIEWS.eyebrow}
            </span>
          </div>
          <h2 className="font-heading text-[clamp(36px,5vw,60px)] leading-[1.1] mb-6 max-w-[800px] mx-auto">
            {REVIEWS.headline}
          </h2>
          <p className="font-sans font-medium text-[clamp(16px,2vw,20px)] text-[#F6F5ED]/60 max-w-[600px] mx-auto leading-relaxed">
            {REVIEWS.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.items.map((review, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-[32px] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="font-heading text-6xl text-[#FFD100] leading-none mb-4 block">"</span>
                <p className="font-sans text-[16px] text-white/80 leading-relaxed mb-8">
                  {review.quote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E51E25] flex items-center justify-center font-heading text-white">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-heading text-[16px] text-white">{review.author}</h4>
                  <span className="font-sans text-[12px] text-[#FFD100] uppercase tracking-wider">{review.business}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}