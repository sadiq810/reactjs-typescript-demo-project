const SocialLogin = ({gogoleText}: {gogoleText: string}) => {
    return (
       <>
           <div className="login-header mb-40">
               <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                   <div className="btn-group m-auto" role="group" aria-label="Second group">
                       <button type="button" className="btn btn-primary btn-large google"><i className={'icofont-google-plus'}></i> { gogoleText }</button>
                   </div>
                   <div className="btn-group m-auto" role="group" aria-label="Second group">
                       <button type="button" className="btn btn-default btn-sm"><i className={'icofont-twitter'}></i></button>
                   </div> <div className="btn-group m-auto" role="group" aria-label="Second group">
                   <button type="button" className="btn btn-default btn-sm"><i className={'icofont-facebook'}></i></button>
               </div>
               </div>
           </div>

           <div className="login-header mb-40">
               <div className="separator">Or</div>
           </div>
       </>
    )
}

export default SocialLogin;
