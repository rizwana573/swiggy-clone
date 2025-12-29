const Contact = () => {
    return (
        <>
        <h1>Contact us</h1>
        <form className="contactForm">
            <input type="text" placeholder="Name" name="name"></input>
            <input type="text" placeholder="Message" name="message"></input>
            <button className="submit">Submit</button>
        </form>
        </>
    )
}

export default Contact;