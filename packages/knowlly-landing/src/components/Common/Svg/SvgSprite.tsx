import theme from '@styles/theme';

const SvgSprite = () => {
  const { primary } = theme.color;
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol id="round-check" viewBox="0 0 34 34">
        <path
          fill={primary.basic}
          fill-rule="evenodd"
          d="M16.602 33.672c9.169 0 16.601-7.433 16.601-16.601C33.203 7.9 25.771.468 16.602.468 7.432.469 0 7.902 0 17.07c0 9.17 7.433 16.602 16.602 16.602zm-.41-12.585l6.44-6.64-1.436-1.393-5.75 5.93-3.467-3.302-1.38 1.449 4.186 3.984.718.683.69-.711z"
          clip-rule="evenodd"
        />
      </symbol>
    </svg>
  );
};

export default SvgSprite;
