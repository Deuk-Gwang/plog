export default function Header() {
  const now = new Date();
  const formattedDate = now.toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <>
      <header>
        <ul className='header-left'>
          <a href='/'>
            <h1 className='logo'>🍎</h1>
          </a>
          <li>
            <a href='https://github.com/Deuk-Gwang'>Git</a>
          </li>
          <li>
            <a href='https://velog.io/@nb3065'>Velog</a>
          </li>
          <li>
            <a href='/'>Login</a>
          </li>
        </ul>
        <ul className='header-right'>
          <h3 className='time'>{formattedDate}</h3>
          <input
            type='text'
            placeholder='Press enter to search🔍'
            className='search-contents'
          />
        </ul>
      </header>
    </>
  );
}
