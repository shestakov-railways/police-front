'use client'

import styles from "./style.module.scss"
import {
    Question
} from "../"

const FAQ = () => {
    return (
        <div className={styles.block}>
            <div className={styles.column}>
                <Question
                    question="What is the primary focus of the Cyber Department?"
                    text="The Cyber Department is dedicated to safeguarding our organization's digital assets from cyber threats and attacks. We focus on implementing robust cybersecurity measures, monitoring network activity for suspicious behavior, and educating our employees on cybersecurity best practices."
                />

                <Question
                    question="How do I report a suspected cyber threat or incident?"
                    text="If you suspect a cyber threat or have encountered a security incident, please report it immediately to our incident response team via the designated email address (security@ourdomain.com) or through our internal incident reporting platform. Provide as much detail as possible to help us assess and address the issue promptly."
                />

                <Question
                    question="What measures are in place to protect against data breaches?"
                    text="We employ multiple layers of security measures to protect against data breaches, including firewalls, intrusion detection systems, encryption of sensitive information, regular security audits, and compliance with industry-standard cybersecurity frameworks. Additionally, we conduct ongoing staff training to ensure everyone is aware of their role in protecting our data."
                />

                <Question
                    question="How often are our cybersecurity measures updated?"
                    text="Our cybersecurity protocols are reviewed and updated regularly to respond to evolving cyber threats. This includes updating our security software, patching vulnerabilities, and revising our security policies and procedures. We also stay informed about the latest cyber threats and defense strategies through continuous monitoring and intelligence sharing with cybersecurity organizations."
                />
            </div>

            <div className={styles.column}>
                <Question
                    question="What should I do if I receive a suspicious email?"
                    text="If you receive a suspicious email, do not click on any links or open any attachments. Forward the email to our cybersecurity team at phishing@ourdomain.com for analysis. Please then delete the email from your inbox and any other folders. Our team will investigate and take necessary actions to prevent any potential threats."
                />

                <Question
                    question="Can I use my personal devices for work purposes?"
                    text="Personal devices can only be used for work purposes if they comply with our Bring Your Own Device (BYOD) policy. This includes ensuring your device has up-to-date antivirus software, a secure password, and adheres to our security protocols. Please contact the IT support team for a security assessment of your device before using it for work-related activities."
                />

                <Question
                    question="What cybersecurity training resources are available to employees?"
                    text="We offer a range of cybersecurity training resources, including online courses, workshops, and seminars, focusing on various aspects of cybersecurity awareness, data protection, and specific threats such as phishing and social engineering. These resources are available on our internal training platform, and we encourage all employees to participate regularly."
                />

                <Question
                    question="How does the Cyber Department handle privacy and data protection?"
                    text="The Cyber Department is committed to protecting privacy and handling data responsibly in accordance with relevant data protection laws and regulations. We implement strict data access controls, data encryption, and privacy policies to ensure that personal and sensitive information is collected, used, stored, and disposed of securely and ethically."
                />
            </div>
        </div>
    )
}

export default FAQ;