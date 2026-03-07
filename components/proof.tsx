export default function Proof() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">
            Trusted by Streamers Across Nigeria
          </h2>
          <p className="mt-3 text-indigo-200/70">
            We support hosts with training, accommodation and real income opportunities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {/* Card 1 */}
          <div className="rounded-xl bg-gray-800 p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-indigo-500">50+</h3>
            <p className="mt-2 text-gray-300">Active Hosts</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-gray-800 p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-indigo-500">3+</h3>
            <p className="mt-2 text-gray-300">Years Operating</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-gray-800 p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-indigo-500">₦20M+</h3>
            <p className="mt-2 text-gray-300">Paid to Hosts</p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-gray-800 p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-indigo-500">24/7</h3>
            <p className="mt-2 text-gray-300">Support Team</p>
          </div>

        </div>

      </div>
    </section>
  );
}