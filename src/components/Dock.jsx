import "./dock.scss"

const Dock = () => {
  return (
    <footer className='dock'>
      <div className="icon">
        <img src="/doc-icons/github.svg" alt="GitHub" />
        <img src="/doc-icons/note.svg" alt="Note" />
        <img src="/doc-icons/pdf.svg" alt="PDF" />
        <img src="/doc-icons/calender.svg" alt="Calender" />
        <img src="/doc-icons/spotify.svg" alt="Spotify" />
        <img src="/doc-icons/mail.svg" alt="Mail" />
        <img src="/doc-icons/link.svg" alt="Link" />
        <img src="/doc-icons/cli.svg" alt="CLI" />
      </div>
    </footer>
  )
}

export default Dock