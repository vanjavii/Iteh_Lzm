import emailjs from 'emailjs-com';
import React from 'react';

export default function ContactUs(){

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('gmail', 'test_template', e.target, 'user_1wVaUVpCJJMo8OA5Nsy59')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }


    return (
        <div>
            <div className="containerForm">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Vaše ime:" name="name" required />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="email" className="form-control" placeholder="Vaš email:" name="email" required/>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Naslov:" name="subject" required/>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Sadržaj Vaše poruke:" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" placeholder="Send message" value="Pošalji poruku"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}






