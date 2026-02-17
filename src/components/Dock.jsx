import "./dock.scss"

const Dock = ({ onIconClick }) => {
  const handleClick = (iconName) => {
    if (onIconClick) {
      onIconClick(iconName)
    }
  }

  return (
    <footer className='dock'>
      <div className="icon github" onClick={() => handleClick('github')}><img src="/doc-icons/github.svg" alt="GitHub" /></div>
      <div className="icon note" onClick={() => handleClick('note')}><img src="/doc-icons/note.svg" alt="Note" /></div>
      <div className="icon pdf" onClick={() => handleClick('pdf')}><img src="/doc-icons/pdf.svg" alt="PDF" /></div>
      <div className="icon calender" onClick={() => handleClick('calender')}><img src="/doc-icons/calender.svg" alt="Calender" /></div>
      <div className="icon spotify" onClick={() => handleClick('spotify')}><img src="/doc-icons/spotify.svg" alt="Spotify" /></div>
      <div className="icon mail" onClick={() => handleClick('mail')}><img src="/doc-icons/mail.svg" alt="Mail" /></div>
      <div className="icon link" onClick={() => handleClick('link')}><img src="/doc-icons/link.svg" alt="Link" /></div>
      <div className="icon cli" onClick={() => handleClick('cli')}><img src="/doc-icons/cli.svg" alt="CLI" /></div>
    </footer>
  )
}

export default Dock