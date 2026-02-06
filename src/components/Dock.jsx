import "./dock.scss"

const Dock = () => {
  return (
    <footer className='dock'>
      <div className="icon github"><img src="/doc-icons/github.svg" alt="GitHub" /></div>
      <div className="icon note"><img src="/doc-icons/note.svg" alt="Note" /></div>
      <div className="icon pdf"><img src="/doc-icons/pdf.svg" alt="PDF" /></div>
      <div className="icon calender"><img src="/doc-icons/calender.svg" alt="Calender" /></div>
      <div className="icon spotify"><img src="/doc-icons/spotify.svg" alt="Spotify" /></div>
      <div className="icon mail"><img src="/doc-icons/mail.svg" alt="Mail" /></div>
      <div className="icon link"><img src="/doc-icons/link.svg" alt="Link" /></div>
      <div className="icon cli"><img src="/doc-icons/cli.svg" alt="CLI" /></div>
    </footer>
  )
}

export default Dock