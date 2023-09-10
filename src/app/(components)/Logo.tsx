export function Logo({ mode }: { mode: 'white' | 'dark' | 'blend-difference' | 'responsive' }) {
  
  const style = {
    white: 'text-white',
    dark: 'text-slate-800',
    'blend-difference': 'mix-blend-difference',
    responsive: 'text-slate-800 dark:text-white'
  }[mode];

  return (
    <svg
      width="200"
      height="185"
      viewBox="0 0 200 185"
      fill="none"
      className={`w-16 h-16 ${style}`}
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_36_334)">
        <g clip-path="url(#clip1_36_334)">
          <path d="M86.6306 74.8331L101.499 0L77.142 61.9207L2.74902 54.5842L62.2732 108.239L47.2576 172.752L95.2389 138.71L61.3928 154.459L77.7778 104.375C77.7778 104.375 46.2794 74.5397 43.4426 71.8985L86.6306 74.8331Z" fill="currentColor" />
          <path d="M125.857 66.3229L104.336 18.4395L116.368 77.1321L159.556 83.9796L125.221 108.679L141.606 162.481L107.76 138.955L155.741 183.904L140.725 116.016L200.25 75.8604L125.857 66.3229Z" fill="currentColor" />
          <path d="M75.2349 26.1672C77.6804 36.634 72.447 46.7585 63.5942 48.8617C54.7414 50.9648 45.5462 44.1173 43.1007 33.6505C40.6551 23.1836 45.8886 13.0591 54.7414 10.956C63.5942 8.85284 72.7894 15.7492 75.2349 26.1672Z" fill="currentColor" />
          <path d="M131.579 34.2374C129.134 44.7042 134.367 54.8287 143.22 56.9319C152.073 59.035 161.268 52.1876 163.713 41.7207C166.159 31.2538 160.926 21.1294 152.073 19.0262C143.171 16.972 133.976 23.7705 131.579 34.2374Z" fill="currentColor" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_36_334">
          <rect width="200" height="185" fill="currentColor" />
        </clipPath>
        <clipPath id="clip1_36_334">
          <rect width="197.5" height="184.062" fill="currentColor"  transform="translate(2.75)"/>
        </clipPath>
      </defs>
    </svg>
  );
}
