import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const ContactSection = () => {
    return (
        <section className="bg-bg-gray p-8 lg:p-26 pt-8 pb-8 text-white">
            <div className="w-full h-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-xl font-semibold">
                        Możesz mnie znaleźć tutaj:
                    </h2>
                    <ContactList>
                        <ContactListElement
                            icon={<FiFacebook />}
                            text="Facebook"
                            link="#"
                        />
                        <ContactListElement
                            icon={<FiTwitter />}
                            text="Twitter"
                            link="#"
                        />
                        <ContactListElement
                            icon={<FiGithub />}
                            text="GitHub"
                            link="#"
                        />
                        <ContactListElement
                            icon={<FiLinkedin />}
                            text="LinkedIn"
                            link="#"
                        />
                    </ContactList>
                </div>
                <div className="w-full lg:w-1/2 h-12  ?"></div>
            </div>
        </section>
    );
};

const ContactList = ({ children }) => {
    return <ul>{children}</ul>;
};

const ContactListElement = ({ icon, text, link }) => {
    return (
        <li>
            <a
                href={link}
                className="flex items-center space-x-2 text-lg hover:text-purple-300 transition"
            >
                {icon}
                <p>{text}</p>
            </a>
        </li>
    );
};

export default ContactSection;
