export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16 w-full border-b bg-gray-100"></div>

      <main className="flex-1 container mx-auto py-12">
        {/* Hero section skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <div className="h-12 w-3/4 bg-gray-200 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-2/3 bg-gray-200 rounded-lg mx-auto mb-8"></div>
        </div>

        {/* Promo section skeleton */}
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <div className="h-8 w-1/2 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-6 w-1/3 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded-lg mb-6"></div>
          <div className="h-10 w-40 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Services section skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <div className="h-8 w-3/4 bg-gray-200 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded-lg mx-auto mb-8"></div>
        </div>

        {/* Cards grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="h-16 w-full bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-10 w-1/2 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>

        <div className="h-10 w-40 bg-gray-200 rounded-lg mx-auto"></div>
      </main>

      <div className="h-40 w-full bg-gray-800"></div>
    </div>
  )
}

