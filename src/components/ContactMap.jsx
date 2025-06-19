const ContactMap = () => (
    <div style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <iframe
            title="Agency Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7477420281534!2d-73.99734638459394!3d40.73018944460807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259906a3a4e69%3A0xf201ea0f7c4fd4bb!2s15%20Washington%20Square%20N%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sma!4v1718016859591!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
);

export default ContactMap;
