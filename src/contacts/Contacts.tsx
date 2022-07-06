import React , {useRef , useState} from 'react';
import s from './Contacts.module.scss'
import SC from "../common/styles/Container.module.scss";
import {useFormik} from "formik";
import emailjs from '@emailjs/browser'


type FormikErrorType = {
    from_name?: string
    email?: string
    message?: string
}

const Contacts = () => {
    console.log(process.env)
    const form = useRef<HTMLFormElement>(null);
    const [loader,setLoader] = useState(false)
    const [message,setMessage] = useState('')
    const formik = useFormik({
        initialValues:{
            from_name:'',
            email:'',
            message:'',
        },
        validate:(values) =>{
            const errors:FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.from_name) {
                errors.from_name = 'Please enter your name';
            } else if (values.from_name.length <= 2) {
                errors.from_name = 'Minimum 2 symbols required';
            }
            if (!values.message) {
                errors.message = 'Seems like you forgot to write a message';
            } else if (values.message.length <= 2) {
                errors.message = 'Minimum 2 symbols required';
            }
            return errors
        },
        onSubmit:(values) => {
            console.log(values)
            setLoader(true)
            emailjs.sendForm(
                process.env.REACT_APP_CV_SERVICE_ID || '',
                process.env.REACT_APP_CV_TEMPLATE_ID || '',
                form.current|| '',
                process.env.REACT_APP_CV_KEY || ''
            )
                .then((res)=>{
                    console.log(res)
                    setMessage('Your message is sent! Thank you!')
                    setTimeout(()=>{
                        setMessage('')
                    },5000)
                    formik.resetForm()
                })
                .catch((err)=>{
                    console.log(err)
                    setMessage('Something went wrong,maybe try again?')
                })
                .finally(()=>{
                    setLoader(false)
                })

        }

    })

    return (
        <div className={s.contactsBlock} id = 'contacts'>
            <div className={SC.container}>
                <div className={s.myContacts}>
                    <h3>My contacts:</h3>
                    <p><a href="mailto: ekaterina.sunday@gmail.com">ekaterina.sunday@gmail.com</a></p>
                    <div>
                        <a href="tel:+971589757057">Contact me by phone</a>
                    </div>
                </div>
                <div className={s.contactForm}>
                    <p>Or just send me an email straight through here:</p>

                        <fieldset >
                            <form onSubmit={formik.handleSubmit} ref={form} >
                            <label htmlFor="name"  >Name</label>
                            <input type="text" id="name" {...formik.getFieldProps('from_name')}/>
                                {formik.touched.from_name && formik.errors.from_name ?
                                    <div className={s.error}>{formik.errors.from_name}</div> : null}
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" {...formik.getFieldProps('email')}/>
                                {formik.touched.email && formik.errors.email ?
                                    <div className={s.error}>{formik.errors.email}</div> : null}
                            <label htmlFor="message">Message</label>
                            <textarea id="message" {...formik.getFieldProps('message')} > </textarea>
                                {formik.touched.message && formik.errors.message?
                                    <div className={s.errorMessage}>{formik.errors.message}</div> : null}
                            <input id="submit" type='submit' name="submit" value="Send Email" />
                                {loader && <div className={s.loader}> </div>}
                                {message && <div className={s.messageOnSend}>{message}</div>}
                            </form>
                        </fieldset>


                </div>

            </div>
        </div>
    );
};

export default Contacts;