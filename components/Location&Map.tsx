export default function PropertyMapSection() {
    return (
        <section className="space-y-4 bg-white">
            {/* Section Header */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Location & Map</h2>

            {/* Map Container */}
            <div className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">

                <iframe
                    title="Property Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828065431697!2d139.74543297684346!3d35.68536067258957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0c05f73973%3A0x7642879a999a071f!2sImperial%20Palace!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>

            </div>
        </section>
    );
}