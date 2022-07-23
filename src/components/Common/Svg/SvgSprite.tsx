import Theme from '@styles/theme';

const SvgSprite = () => {
  const { primary, gray } = Theme.color;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" display="none">
      <symbol id="checkbox-checked" viewBox="0 0 20 20">
        <path
          d="M17.897 3.371c-.171-.771-.386-1.242-.944-1.8-.558-.557-1.03-.771-1.803-.942C14.678.543 13.95.5 13.176.5H4.807c-.73 0-1.502.043-1.931.129-.73.171-1.202.385-1.803.942-.558.6-.773 1.072-.944 1.8C.043 3.843 0 4.571 0 5.343V13.7c0 .729.043 1.5.129 1.929.171.771.386 1.242.944 1.8.558.557 1.03.771 1.803.942.472.086 1.201.129 1.931.129h8.37c.729 0 1.501-.043 1.93-.129.773-.171 1.245-.385 1.803-.942.558-.558.773-1.029.944-1.8.086-.472.13-1.2.13-1.929V5.3c.042-.729 0-1.457-.087-1.929ZM14.764 6.8l-6.48 6.471a.208.208 0 0 1-.301 0L3.519 8.814a.207.207 0 0 1 0-.3l.773-.728a.208.208 0 0 1 .3 0l3.563 3.557 5.58-5.572a.208.208 0 0 1 .3 0l.772.772c.043 0 .043.171-.043.257Z"
          fill={primary.basic}
        />
      </symbol>
      <symbol id="checkbox-default" viewBox="0 0 20 20">
        <rect x=".5" y="1" width="18" height="18" rx="3.5" fill={gray['FF']} stroke={gray['CC']} />
      </symbol>
      <symbol id="clear" viewBox="0 0 26 26">
        <circle cx="13" cy="13" r="13" fill={gray['EF']} />
        <path
          d="m17.667 9.273-.94-.94L13 12.06 9.273 8.333l-.94.94L12.06 13l-3.727 3.727.94.94L13 13.94l3.727 3.727.94-.94L13.94 13l3.727-3.727Z"
          fill={gray['00']}
        />
      </symbol>
      <symbol id="k_class" viewBox="0 0 16 16">
        <path
          fill={gray['8F']}
          stroke={gray['8F']}
          stroke-width="1.3"
          d="M5.85 10v1.052l.94-.47 4-2L11.954 8l-1.162-.581-4-2-.941-.47V10zm-4.2-5c0-.746.604-1.35 1.35-1.35h10c.746 0 1.35.604 1.35 1.35v6A1.35 1.35 0 0 1 13 12.35H3A1.35 1.35 0 0 1 1.65 11V5z"
        />
      </symbol>
      <symbol id="review" viewBox="0 0 16 16">
        <path
          fill={gray['8F']}
          stroke={gray['8F']}
          stroke-linecap="square"
          d="M14.5 5v7.691l-2.276-1.138-.106-.053H3A1.5 1.5 0 0 1 1.5 10V5A1.5 1.5 0 0 1 3 3.5h10A1.5 1.5 0 0 1 14.5 5zM5.04 9c.831 0 1.539-.653 1.539-1.5 0-.846-.708-1.5-1.54-1.5C4.208 6 3.5 6.654 3.5 7.5c0 .847.708 1.5 1.54 1.5zm3.118 0c.832 0 1.54-.654 1.54-1.5S8.99 6 8.158 6c-.832 0-1.54.654-1.54 1.5 0 .847.708 1.5 1.54 1.5zm3.118 0c.832 0 1.54-.654 1.54-1.5S12.108 6 11.276 6c-.832 0-1.54.654-1.54 1.5 0 .847.708 1.5 1.54 1.5z"
        />
      </symbol>
      <symbol id="previous" viewBox="0 0 24 24">
        <path d="m12 20 1.41-1.41L7.83 13H20v-2H7.83l5.58-5.59L12 4l-8 8 8 8Z" fill={gray['00']} />
      </symbol>
      <symbol id="indicator-1-active" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="10" fill={gray['6B']} />
        <circle cx="10" cy="10" r="8" fill={gray['00']} />
        <path
          d="M11.124 5.42h-1.02L8.4 6.344l.444.912 1.26-.66v7.32h1.02V5.42Z"
          fill={gray['FF']}
        />
      </symbol>
      <symbol id="indicator-1-inactive" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="10" fill={gray['DD']} />
        <circle cx="10" cy="10" r="8" fill={gray['CC']} />
        <path
          d="M11.124 5.42h-1.02L8.4 6.344l.444.912 1.26-.66v7.32h1.02V5.42Z"
          fill={gray['FF']}
        />
      </symbol>
      <symbol id="indicator-2-active" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="10" fill={gray['6B']} />
        <circle cx="10" cy="10" r="8" fill={gray['00']} />
        <path
          d="m8.4 7.256-.084.24-.996-.24a1.52 1.52 0 0 1 .156-.384c.6-1.296 2.196-1.836 3.528-1.26 1.392.516 1.968 2.04 1.344 3.384-.132.252-.288.516-.516.732l-3.096 3.048h4.044v1.02H7.224V12.8l3.9-3.852c.096-.12.216-.264.276-.396.36-.756.036-1.656-.816-2.028-.864-.36-1.788-.012-2.184.732Z"
          fill={gray['FF']}
        />
      </symbol>
      <symbol id="indicator-2-inactive" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="10" fill={gray['DD']} />
        <circle cx="10" cy="10" r="8" fill={gray['CC']} />
        <path
          d="M8.23 7.196c-.048.096-.072.18-.096.264l-.996-.264c.036-.132.084-.276.156-.408.648-1.368 2.316-1.944 3.72-1.332 1.416.528 2.052 2.148 1.416 3.528a2.947 2.947 0 0 1-.54.744l-3.156 3.156h4.14v1.044H7.198v-1.02l3.96-3.888c.12-.132.24-.276.312-.432.372-.804.024-1.8-.888-2.196-.9-.384-1.944 0-2.352.804Z"
          fill={gray['FF']}
        />
      </symbol>
      <symbol id="list-checkbox-checked" viewBox="0 0 26 26">
        <circle cx="13" cy="13" r="13" fill={primary.basic} />
        <path d="M11 15.78 8.22 13l-.947.94L11 17.667l8-8-.94-.94L11 15.78Z" fill={gray['FF']} />
      </symbol>
      <symbol id="list-checkbox-default" viewBox="0 0 26 26">
        <circle cx="13" cy="13" r="13" fill={gray['EF']} />
        <path d="M11 15.78 8.22 13l-.947.94L11 17.667l8-8-.94-.94L11 15.78Z" fill={gray['FF']} />
      </symbol>
      <symbol id="search" viewBox="0 0 24 24">
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
          fill={gray['00']}
        />
      </symbol>
      <symbol id="chevron-down-fill" viewBox="0 0 20 20">
        <path
          d="m15 8.333-1.175-1.175L10 10.975 6.175 7.158 5 8.333l5 5 5-5Z"
          fill={primary.dark}
        />
      </symbol>
      <symbol id="chevron-down" viewBox="0 0 20 20">
        <path d="m15 8.333-1.175-1.175L10 10.975 6.175 7.158 5 8.333l5 5 5-5Z" fill={gray['8F']} />
      </symbol>
      <symbol id="chevron-up" viewBox="0 0 20 20">
        <path
          d="m15 12.159-1.175 1.175L10 9.517l-3.825 3.817L5 12.159l5-5 5 5Z"
          fill={gray['8F']}
        />
      </symbol>
      <symbol id="chevron-right" viewBox="0 0 20 20">
        <path d="M8.333 5 7.158 6.175 10.975 10l-3.817 3.825L8.333 15l5-5-5-5Z" fill={gray['00']} />
      </symbol>
      <symbol id="category-service-planning" viewBox="0 0 36 36">
        <path
          d="m6.444 26.377-.177-.162.206.198-.029-.036ZM5.955 25.918l-.17-.162.29.275-.12-.113ZM5.785 25.756l-.141-.134.063.063.078.07Z"
          fill="#B5F730"
        />
        <path
          d="M19.055 25.055a.882.882 0 0 1-.269-.064c-.056-.02-.113-.035-.163-.063-.042-.021-.07-.05-.106-.078-.05-.035-.106-.063-.149-.106a1.082 1.082 0 0 1-.12-.134l-.043-.042a.905.905 0 0 1-.106-.177c-.028-.056-.05-.12-.07-.176-.015-.056-.03-.12-.043-.176-.008-.057-.015-.106-.015-.163v-7.63c0-.282.107-.543.27-.748a1.04 1.04 0 0 1 .538-.381c.085-.028.177-.05.27-.056.042 0 .077-.015.12-.015h9.692l.12-.127.1-.106.942-.98.064-.071s.042-.064.07-.092c.27-.303.482-.635.638-.981a3.811 3.811 0 0 0 .354-1.539 3.833 3.833 0 0 0-.998-2.675c-.064-.07-.128-.141-.199-.212l-.985-.931-1.183-1.122-1.183-1.123-.021-.02a3.823 3.823 0 0 0-1.162-.756 3.825 3.825 0 0 0-1.183-.29 3.517 3.517 0 0 0-1.184.071c-.325.07-.651.184-.956.339-.078.042-.149.092-.22.134-.29.17-.574.367-.822.621l-.063.07-.29.304-.653.678-.531.55-.411.43-.765.798-.177.184-.943.981-.056.064-.886.924-.297.31-.645.678-.532.558-.41.43-.773.805-.177.184-.942.98-.064.064-.879.918-.297.31-.645.67-.538.558-.411.424-.772.805-.17.176-.943.981-.064.07-.907.947 4.507 4.284 4.506 4.291.155-.162.815-.854.362-.381.58-.607.603-.628.34-.36.538-.558h-.07c-.043 0-.078-.014-.12-.014l.027.007Z"
          fill={primary.basic}
        />
        <path
          d="m13.657 26.509-1.183-1.122-1.176-1.123-1.184-1.122-1.176-1.122-1.183-1.122-.907-.869-1.502 6.296.298.283.141.134.17.162.12.113.192.184.177.162.029.035.212.198.107.106.325.303.057.057.106.105.135.127.07.071.313.297.106.098.149.141.099.092.24.233.157.148.205.191.128.127.014.007.234.226.113.113.375.353 6.242-1.779-1.027-.981-1.176-1.122Z"
          fill="#FFF4EB"
        />
        <path
          d="m6.848 20.03.907.867 1.183 1.123 1.176 1.122 1.183 1.122 1.177 1.123 1.183 1.122 1.176 1.122 1.027.981-4.506-4.291-4.506-4.292Z"
          fill={primary.dark}
        />
        <path
          d="m9.243 30.038-.347-.339-.142-.134-.113-.106-.092-.085-.496-.473-.255-.24-.135-.134-.177-.162-.206-.198-.163-.162-.19-.176-.135-.128-.32-.303-.205-.198-.07-.063-.121-.12-.29-.275-.079-.071-.063-.063-.177-.17-.12-.113-.128.544-.241 1.023-.248 1.024-.241 1.023-.248 1.023L4 31.986l.24-.07.249-.071.24-.064.249-.07.24-.071.249-.07.24-.071.248-.07.241-.071.248-.064.241-.07.241-.071.248-.07.241-.071.248-.07.24-.071.249-.064.24-.07.249-.071.24-.07.249-.071.24-.07.248-.064-.248-.233-.127-.12Z"
          fill={primary.basic}
        />
        <path
          d="m7.174 28.062-.057-.057.163.163-.106-.106ZM7.904 28.76l-.107-.098.255.24-.148-.142ZM8.881 29.692l-.127-.127.142.134-.015-.007ZM6.685 27.596l-.212-.198.318.304-.106-.106ZM9.13 29.925l-.234-.226.347.339-.114-.113ZM7.415 28.294l-.135-.127.206.198-.071-.07ZM8.393 29.226l-.241-.233-.1-.092.497.473-.156-.148Z"
          fill="#B5F730"
        />
        <path
          d="M31.73 15.498a1.152 1.152 0 0 0-.268-.254 1.04 1.04 0 0 0-.27-.127 1.14 1.14 0 0 0-.269-.057c-.042 0-.078-.014-.12-.014h-1.927L28 15.5l-.5.5-.5.5-.5.5-.5.5-.5 1H25l-.5 1-.5.5-.5.5-.5.5-.5.5-.5.5-.5.5-.765 1.037-.128.135-1.107.828-.27.576h1.675v2.393c0 .134.021.247.043.332.05.169.148.254.269.247.078 0 .17-.05.269-.134.057-.05.113-.106.177-.177l.092-.113.27-.332.269-.331.269-.332.27-.332.268-.332.12-.148.15-.176.141-.177.128-.155.021-.028.149-.177.028-.042h6.958c.042 0 .078-.014.12-.014a.882.882 0 0 0 .27-.064c.056-.02.113-.035.162-.063.043-.021.071-.05.107-.078.05-.035.106-.063.148-.106.043-.042.085-.084.12-.134l.043-.042a.905.905 0 0 0 .107-.177c.028-.056.05-.12.07-.176.015-.056.029-.12.036-.176.007-.057.014-.106.014-.163v-7.63c0-.282-.106-.543-.27-.748l.008.007Zm-6.383 5.216a.735.735 0 0 1-.737-.734.74.74 0 0 1 .737-.734.74.74 0 0 1 .737.734.74.74 0 0 1-.737.734Zm2.55 0a.74.74 0 0 1-.736-.734.74.74 0 0 1 .737-.734.74.74 0 0 1 .737.734.74.74 0 0 1-.737.734Z"
          fill={primary.dark}
        />
        <path
          d="m19.658 24.645.942-.98.127-.135.815-.847.369-.381.574-.6.602-.628.34-.353.836-.875.106-.106.942-.981.135-.141.808-.847.368-.389.574-.6.61-.635.34-.353.722-.755h-9.692a.624.624 0 0 0-.12.014 1.14 1.14 0 0 0-.27.057c-.092.035-.184.07-.269.127-.106.07-.191.155-.27.254-.162.204-.268.466-.268.748v7.63c0 .056.007.106.014.162a1.326 1.326 0 0 0 .22.53l.042.042c.035.05.078.092.12.134.043.042.1.07.15.106.035.021.07.056.105.078.05.028.107.042.163.063.085.028.177.05.27.064.042 0 .078.014.12.014h.07l.298-.31.107-.114v.007Zm3.131-5.406c.411 0 .737.331.737.734a.74.74 0 0 1-.737.734.74.74 0 0 1-.737-.734c0-.403.326-.734.737-.734Z"
          fill={primary.dark}
        />
        <path
          d="M22.79 20.714c.41 0 .736-.331.736-.734a.74.74 0 0 0-.736-.734.74.74 0 0 0-.737.734c0 .402.326.734.737.734ZM25.347 19.24a.735.735 0 0 0-.737.733.74.74 0 0 0 .737.734.74.74 0 0 0 .737-.734.74.74 0 0 0-.737-.734ZM27.898 19.24a.74.74 0 0 0-.737.733.74.74 0 0 0 .737.734.74.74 0 0 0 .737-.734.74.74 0 0 0-.737-.734Z"
          fill={gray['FF']}
        />
      </symbol>
      <symbol id="category-design" viewBox="0 0 36 36">
        <g clipPath="url(#a)">
          <path
            d="M13.672 28.921h-2.89a.547.547 0 1 0 0 1.094h2.89a.547.547 0 1 0 0-1.094ZM19.445 28.921h-2.89a.547.547 0 0 0 0 1.094h2.89a.547.547 0 1 0 0-1.094ZM25.218 28.921h-2.89a.547.547 0 0 0 0 1.094h2.89a.547.547 0 1 0 0-1.094ZM5.985 25.218a.547.547 0 0 0 1.094 0v-2.89a.547.547 0 1 0-1.094 0v2.89ZM5.985 19.445a.547.547 0 1 0 1.094 0v-2.89a.547.547 0 0 0-1.094 0v2.89ZM6.532 14.212a.54.54 0 0 0 .547-.54v-2.89a.547.547 0 1 0-1.094 0v2.89a.547.547 0 0 0 .547.54ZM10.782 7.079h2.89a.547.547 0 1 0 0-1.094h-2.89a.547.547 0 1 0 0 1.094ZM16.555 7.079h2.89a.547.547 0 1 0 0-1.094h-2.89a.547.547 0 0 0 0 1.094ZM25.218 5.985h-2.883a.547.547 0 1 0 0 1.094h2.883a.547.547 0 1 0 0-1.094ZM28.921 19.445a.547.547 0 1 0 1.094 0v-2.89a.547.547 0 0 0-1.094 0v2.89ZM29.468 14.219a.553.553 0 0 0 .547-.547v-2.89a.547.547 0 1 0-1.094 0v2.89a.553.553 0 0 0 .547.547ZM28.921 25.218a.547.547 0 0 0 1.094 0v-2.89a.547.547 0 1 0-1.094 0v2.89Z"
            fill="#FFC7A1"
          />
          <path
            d="M24.932 14.531v-3.085a.28.28 0 0 0-.28-.28H11.348a.28.28 0 0 0-.28.28v3.085a.28.28 0 0 0 .28.28h4.088a.287.287 0 0 1 .28.254V25.64a.287.287 0 0 0 .28.287h3.996a.287.287 0 0 0 .28-.287V15.065a.286.286 0 0 1 .286-.28h4.087a.28.28 0 0 0 .287-.254Z"
            fill={primary.dark}
          />
          <path
            d="M8.693 4H4.37A.371.371 0 0 0 4 4.371v4.322c0 .205.166.37.371.37h4.322a.371.371 0 0 0 .37-.37V4.37A.371.371 0 0 0 8.694 4ZM31.629 4h-4.322a.371.371 0 0 0-.37.371v4.322c0 .205.165.37.37.37h4.322a.371.371 0 0 0 .371-.37V4.37A.371.371 0 0 0 31.629 4ZM8.693 26.936H4.37a.371.371 0 0 0-.371.372v4.321c0 .205.166.371.371.371h4.322a.371.371 0 0 0 .37-.37v-4.322a.371.371 0 0 0-.37-.372Z"
            fill={primary.basic}
          />
          <path
            d="M31.629 26.936h-4.322a.371.371 0 0 0-.37.372v4.321c0 .205.165.371.37.371h4.322a.371.371 0 0 0 .371-.37v-4.322a.371.371 0 0 0-.371-.372Z"
            fill={primary.dark}
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={gray['FF']} transform="translate(4 4)" d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="category-develop" viewBox="0 0 36 36">
        <g clipPath="url(#a)">
          <path
            d="M13.744 28.593a1.068 1.068 0 0 0 .15.995 1.04 1.04 0 0 0 .905.412H21.2a1.023 1.023 0 0 0 .905-.412 1.061 1.061 0 0 0 .15-.995l-.658-2.443h-7.19l-.664 2.443Z"
            fill={primary.basic}
          />
          <path
            d="M27.526 6H8.462c-.455 0-.905.09-1.326.266-.42.176-.802.435-1.124.761a3.51 3.51 0 0 0-.75 1.14A3.551 3.551 0 0 0 5 9.514v13.125a3.54 3.54 0 0 0 1.014 2.483 3.437 3.437 0 0 0 2.448 1.03h5.928l.035-.139c.127-.398.371-.746.7-.998a1.985 1.985 0 0 1 1.138-.41h3.474c.409.019.802.163 1.127.415.326.251.567.598.693.993l.035.138h5.934a3.443 3.443 0 0 0 2.446-1.03 3.545 3.545 0 0 0 1.016-2.482V9.513c0-.462-.088-.919-.262-1.345a3.511 3.511 0 0 0-.75-1.14 3.453 3.453 0 0 0-1.124-.762A3.412 3.412 0 0 0 27.526 6Zm.706 15.308a2.503 2.503 0 0 1-.714 1.754 2.433 2.433 0 0 1-1.729.724H10.193a2.424 2.424 0 0 1-1.727-.725 2.497 2.497 0 0 1-.715-1.753V10.842c0-.657.257-1.287.715-1.752a2.425 2.425 0 0 1 1.727-.726H25.8a2.405 2.405 0 0 1 1.729.724 2.475 2.475 0 0 1 .713 1.754l-.011 10.466Z"
            fill={primary.dark}
          />
          <path
            d="M19.736 24.605h-3.478a1.99 1.99 0 0 0-1.13.414 2.033 2.033 0 0 0-.693.993l-.035.138h7.2l-.036-.138a2.033 2.033 0 0 0-.695-.995 1.99 1.99 0 0 0-1.133-.412Z"
            fill={primary.dark}
          />
          <path
            d="M25.801 8.364H10.193c-.648 0-1.27.26-1.727.726a2.497 2.497 0 0 0-.716 1.752v10.466c0 .657.258 1.288.716 1.753.458.464 1.08.725 1.727.725H25.8a2.405 2.405 0 0 0 1.729-.724 2.475 2.475 0 0 0 .713-1.754V10.842a2.503 2.503 0 0 0-.713-1.754 2.434 2.434 0 0 0-1.729-.724ZM15.297 19.492a.416.416 0 0 1-.593.006l-3.1-3.11a.401.401 0 0 1-.125-.3.428.428 0 0 1 .125-.302l3.1-3.133a.418.418 0 0 1 .593 0 .417.417 0 0 1 0 .601l-2.804 2.84 2.804 2.808a.43.43 0 0 1 0 .59Zm4.422-6.406-2.674 6.31a.426.426 0 0 1-.385.258.386.386 0 0 1-.16-.036.413.413 0 0 1-.223-.23.426.426 0 0 1 .004-.324l2.673-6.31a.42.42 0 0 1 .387-.256.412.412 0 0 1 .381.265.426.426 0 0 1-.003.323Zm4.677 3.302-3.1 3.11a.41.41 0 0 1-.457.087.414.414 0 0 1-.136-.093.42.42 0 0 1-.092-.464.42.42 0 0 1 .092-.138l2.804-2.809-2.798-2.833a.414.414 0 0 1-.127-.3.42.42 0 0 1 .127-.302.418.418 0 0 1 .593 0l3.1 3.134a.422.422 0 0 1 .092.464.423.423 0 0 1-.092.138l-.006.006Z"
            fill="#FFC7A1"
          />
          <path
            d="m12.487 16.087 2.804-2.839a.414.414 0 0 0 .127-.3.42.42 0 0 0-.127-.301.418.418 0 0 0-.593 0l-3.1 3.134a.423.423 0 0 0-.125.3.41.41 0 0 0 .125.301l3.1 3.11a.408.408 0 0 0 .296.12.411.411 0 0 0 .385-.262.426.426 0 0 0-.094-.46l-2.798-2.803ZM21.296 12.653a.418.418 0 0 0-.593 0 .413.413 0 0 0-.127.3.42.42 0 0 0 .127.301l2.804 2.84-2.798 2.802a.422.422 0 0 0-.092.464.422.422 0 0 0 .092.138.414.414 0 0 0 .457.096.409.409 0 0 0 .136-.09l3.1-3.11a.42.42 0 0 0 .092-.464.42.42 0 0 0-.092-.137l-3.106-3.14ZM19.5 12.533a.41.41 0 0 0-.546.222l-2.691 6.31a.426.426 0 0 0 .22.553.389.389 0 0 0 .39-.034.427.427 0 0 0 .155-.188l2.673-6.31a.427.427 0 0 0-.201-.553Z"
            fill={gray['FF']}
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={gray['FF']} transform="translate(5 6)" d="M0 0h26v24H0z" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="category-marketing" viewBox="0 0 36 36">
        <g clipPath="url(#a)">
          <path
            d="m28.936 11.012-1.413 1.411a.374.374 0 0 1-.264.11h-.039l-2.225-.245-.29.29a8.622 8.622 0 0 1-.943 11.837 8.642 8.642 0 0 1-11.882-.314 8.624 8.624 0 0 1 5.422-14.702 8.643 8.643 0 0 1 6.113 1.89l.29-.27-.245-2.237a.386.386 0 0 1 .103-.309l1.432-1.405a13.033 13.033 0 0 0-17.16 2.836 13.001 13.001 0 0 0 .968 17.35A13.029 13.029 0 0 0 30.85 20.12a12.999 12.999 0 0 0-1.896-9.108h-.019Z"
            fill="#FFC7A1"
          />
          <path
            d="M12.643 18.01a5.349 5.349 0 0 0 3.263 5.115 5.365 5.365 0 0 0 7.098-3.01 5.352 5.352 0 0 0 .353-2.105 5.3 5.3 0 0 0-1.006-3.106l-.09.097-.104.103-3.109 3.106a.895.895 0 0 1-.645.264.909.909 0 0 1-.645-.264.896.896 0 0 1-.274-.645c0-.12.087-.219.134-.33.047-.11.296-.298.382-.382l3.441-3.059-.38-.179a5.35 5.35 0 0 0-8.437 4.369l.02.026Z"
            fill={primary.basic}
          />
          <path
            d="m23.466 8.783.239 2.236-.297.296-2.335 2.326-.09.097-.103.103-3.11 3.106a.894.894 0 0 0 0 1.288.908.908 0 0 0 .646.265.898.898 0 0 0 .645-.265l3.109-3.105.103-.104.09-.096 2.335-2.326.29-.29 2.245.245h.039c.099 0 .194-.04.264-.11l1.413-1.411 1.935-1.933a.374.374 0 0 0-.2-.645l-2.58-.463a.09.09 0 0 1-.078-.071l-.451-2.616a.373.373 0 0 0-.258-.31.381.381 0 0 0-.387.11l-1.935 1.933-1.425 1.43a.388.388 0 0 0-.104.31Z"
            fill={primary.dark}
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={gray['FF']} transform="translate(5 5)" d="M0 0h26v26H0z" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="category-language" viewBox="0 0 36 36">
        <g clipPath="url(#a)">
          <path
            d="M28.606 10.257h-2.103v9.337c0 .627-.252 1.228-.701 1.671a2.41 2.41 0 0 1-1.693.692H10.13a.11.11 0 0 0-.073 0l-.56.59v2.276a2.335 2.335 0 0 0 .672 1.722 2.395 2.395 0 0 0 1.722.72H25.87a.11.11 0 0 1 .072 0l4.898 3.699a.087.087 0 0 0 .103.034.086.086 0 0 0 .057-.092V12.62a2.335 2.335 0 0 0-.701-1.67 2.396 2.396 0 0 0-1.693-.693Z"
            fill="#FFC7A1"
          />
          <path
            d="M10.952 12.398c-.08.287-.138.467-.254.804l-.393 1.042h1.288l-.379-1.042a12.15 12.15 0 0 1-.262-.804ZM17.08 14.933v-.093c0-.496-.277-.718-1.281-.718h-.779v1.53h.844c.83 0 1.216-.087 1.216-.719Z"
            fill={primary.dark}
          />
          <path
            d="M10.13 21.979h13.979a2.41 2.41 0 0 0 1.692-.692 2.348 2.348 0 0 0 .702-1.671V7.363c0-.627-.253-1.228-.701-1.67A2.41 2.41 0 0 0 24.108 5H7.372a2.41 2.41 0 0 0-1.679.7A2.347 2.347 0 0 0 5 7.363v19.723a.085.085 0 0 0 .056.091.089.089 0 0 0 .104-.034l4.366-4.546.568-.59a.11.11 0 0 1 .036-.028Zm8.594-8.274c0-1.752.822-2.5 2.234-2.5a2.594 2.594 0 0 1 1.506.396.43.43 0 0 1-.162.738.442.442 0 0 1-.304-.02 1.92 1.92 0 0 0-1.062-.259c-.808 0-1.266.474-1.266 1.717v.15c0 1.207.414 1.71 1.273 1.71.416.014.826-.102 1.172-.33a.403.403 0 0 1 .575.1.436.436 0 0 1-.11.632c-.49.323-1.07.484-1.659.46-1.375 0-2.183-.718-2.183-2.5l-.014-.294Zm-4.636-1.817c0-.453.153-.604.619-.604h1.455c1.114 0 1.66.417 1.66 1.286v.086a.989.989 0 0 1-.207.69c-.154.196-.376.33-.623.373a1.147 1.147 0 0 1 .794.376 1.118 1.118 0 0 1 .283.824v.136c0 .87-.546 1.386-1.681 1.386h-1.681c-.466 0-.619-.143-.619-.603v-3.95Zm-4.49 4.31a.409.409 0 0 1-.24.25.42.42 0 0 1-.349-.02.389.389 0 0 1-.258-.21.376.376 0 0 1 .004-.33l1.644-4.216a.58.58 0 0 1 .207-.326.595.595 0 0 1 .943.326l1.644 4.18a.397.397 0 0 1-.1.493.41.41 0 0 1-.162.082.448.448 0 0 1-.618-.258l-.43-1.157h-1.855l-.43 1.185Z"
            fill={primary.dark}
          />
          <path
            d="M16.847 12.685v-.064c0-.46-.32-.568-1.114-.568h-.727v1.322h.727c.91 0 1.114-.151 1.114-.69Z"
            fill={primary.dark}
          />
          <path
            d="M12.277 16.169a.436.436 0 0 0 .25.268.448.448 0 0 0 .368-.01.411.411 0 0 0 .272-.225.397.397 0 0 0-.01-.35l-1.608-4.18a.581.581 0 0 0-.211-.306.595.595 0 0 0-.924.306l-1.66 4.216a.376.376 0 0 0 .102.464.389.389 0 0 0 .153.075.418.418 0 0 0 .59-.23l.43-1.185h1.84l.408 1.157Zm-1.972-1.925.393-1.042c.116-.337.174-.517.254-.804.073.251.139.46.262.804l.379 1.042h-1.288ZM14.707 16.42h1.652c1.135 0 1.681-.517 1.681-1.386v-.115a1.109 1.109 0 0 0-.283-.824 1.133 1.133 0 0 0-.794-.376c.247-.043.47-.176.623-.373a.99.99 0 0 0 .207-.69v-.086c0-.869-.546-1.285-1.66-1.285h-1.455c-.466 0-.618.15-.618.603v3.929c.029.46.181.603.647.603Zm.313-4.367h.728c.793 0 1.113.108 1.113.568v.064c0 .539-.204.718-1.07.718h-.727l-.044-1.35Zm0 2.069h.779c1.004 0 1.28.222 1.28.718v.093c0 .632-.385.719-1.215.719h-.844v-1.53ZM20.922 16.492a2.807 2.807 0 0 0 1.659-.46.439.439 0 0 0 .187-.471.434.434 0 0 0-.078-.161.398.398 0 0 0-.428-.168.402.402 0 0 0-.147.067 2.006 2.006 0 0 1-1.171.33c-.86 0-1.274-.502-1.274-1.709v-.15c0-1.243.458-1.717 1.266-1.717.372-.019.742.071 1.063.259a.442.442 0 0 0 .547-.161.426.426 0 0 0-.082-.558 2.595 2.595 0 0 0-1.506-.395c-1.412 0-2.234.718-2.234 2.5v.294c0 1.781.83 2.5 2.198 2.5Z"
            fill={gray['FF']}
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={gray['FF']} transform="translate(5 5)" d="M0 0h26v26H0z" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="category-etc" viewBox="0 0 36 36">
        <path
          d="M31.541 12.582c-.14-.491-.287-.924-.452-1.326a13.907 13.907 0 0 0-.364-.77c-.025-.045-.038-.09-.063-.134l-.026-.058c-.14-.26-.293-.516-.453-.77a9.351 9.351 0 0 0-.452-.663l-.045-.064c-.134-.178-.267-.363-.407-.535-.122-.146-.256-.287-.383-.427l-.07-.076-.096-.102a2.8 2.8 0 0 0-.184-.204 1.88 1.88 0 0 0-.122-.108l-.05-.051a12.837 12.837 0 0 0-.905-.79c-.147-.121-.3-.23-.453-.338-.153-.108-.3-.21-.453-.312-.146-.096-.293-.179-.452-.274l-.115-.07a4.948 4.948 0 0 0-.338-.191c-.038-.02-.083-.039-.127-.064-.07-.032-.14-.07-.21-.102l-.122-.057-.146-.07a4.674 4.674 0 0 0-.313-.147c-.102-.044-.204-.076-.312-.115l-.147-.05-.07-.026c-.127-.045-.255-.096-.382-.134a7.137 7.137 0 0 0-.453-.134c-.153-.044-.306-.076-.452-.114l-.14-.032a5.504 5.504 0 0 0-.313-.07c-.102-.02-.204-.032-.312-.051l-.14-.02-.109-.018a6.416 6.416 0 0 0-.796-.09c-.134-.012-.268-.012-.453-.025h-.153c-.102-.013-.197-.006-.3-.006-.101 0-.203-.007-.305 0h-.153l-.02.012c-.146 0-.293.013-.433.026h-.083l-.37.038c-.108.013-.216.032-.318.045l-.134.019-.146.019c-.102.013-.21.032-.313.05-.108.02-.223.052-.331.077l-.128.032-.452.115-.109.032a5.099 5.099 0 0 0-.682.223l-.12.044-.147.051c-.109.038-.21.077-.313.115a7.285 7.285 0 0 0-.325.146l-.134.064-.07.032c-.076.038-.159.076-.236.115-.05.025-.101.044-.146.07a10.35 10.35 0 0 0-.453.255c-.153.089-.306.178-.452.273a11.9 11.9 0 0 0-1.358 1.02 10.312 10.312 0 0 0-.905.88l-.09.095c-.127.133-.248.267-.369.407-.14.172-.268.344-.401.523l-.058.076a9.44 9.44 0 0 0-.452.67c-.153.241-.3.49-.453.783 0 .012-.013.019-.019.032l-.07.146c-.14.28-.261.529-.363.777-.166.395-.313.829-.453 1.332-.3 1.07-.452 2.147-.452 3.217 0 1.064.153 2.147.452 3.211.14.503.293.937.453 1.332.095.235.216.484.363.777.032.064.057.114.09.185.133.254.286.503.439.751h.006l.185-.19.185-.185.147-.147.044-.038c.064-.064.134-.115.204-.166a3.52 3.52 0 0 1 .185-.14c-.16-.28-.306-.554-.44-.835a5.442 5.442 0 0 1-.12-.286c-.077-.179-.16-.357-.23-.542a9.645 9.645 0 0 1-.274-.828 9.226 9.226 0 0 1-.332-1.657 11.779 11.779 0 0 1-.057-.828c0-.134-.02-.267-.02-.401 0-.147.013-.28.02-.427.013-.28.025-.554.057-.828a8.955 8.955 0 0 1 .338-1.657c.083-.28.178-.554.28-.828.07-.178.147-.35.224-.522.044-.102.082-.21.133-.306.134-.287.287-.56.447-.828.108-.179.223-.357.337-.529.28-.408.587-.796.918-1.166a10.184 10.184 0 0 1 1.836-1.605 11.067 11.067 0 0 1 1.835-1.02c.3-.127.606-.242.918-.337.3-.096.606-.179.918-.249.3-.07.606-.127.918-.165.3-.039.612-.064.918-.077.153-.006.306-.013.459-.013.153 0 .306.007.459.013.312.013.618.038.917.077.313.038.619.095.918.165a10.798 10.798 0 0 1 1.836.586c.312.134.618.287.918.453a10.996 10.996 0 0 1 1.836 1.274c.324.28.63.58.917.898.332.363.638.752.918 1.166.121.172.236.35.344.535.16.268.306.548.446.828.051.102.09.204.134.306.077.172.16.344.223.523.102.273.198.547.28.828.077.274.154.548.211.828.051.274.096.548.128.828.031.274.05.548.057.828 0 .14.02.28.02.427 0 .134-.014.268-.02.402-.013.28-.026.554-.057.828-.032.28-.07.554-.128.828-.057.28-.127.554-.204.828-.083.28-.172.555-.274.828-.07.185-.153.364-.23.542-.044.096-.076.191-.12.287-.134.286-.28.56-.44.828-.109.185-.236.363-.357.541-.064.096-.121.198-.191.287-.21.287-.434.56-.67.828l-.057.058a9.774 9.774 0 0 1-.771.77l-.147.128c-.287.248-.58.49-.892.7-.007 0-.02.013-.026.013-.293.204-.605.383-.918.555-.165.089-.331.178-.503.261-.14.064-.28.127-.42.185-.3.127-.606.248-.918.35-.3.096-.606.185-.918.255-.064.013-.122.032-.185.045-.242.05-.491.076-.74.114-.3.038-.611.064-.917.077-.153.006-.306.025-.46.025-.152 0-.305-.019-.458-.025a10.643 10.643 0 0 1-.918-.077 8.804 8.804 0 0 1-.733-.114c-.064-.013-.121-.032-.185-.045a8.867 8.867 0 0 1-.918-.255 9.377 9.377 0 0 1-.918-.35 8.156 8.156 0 0 1-.917-.446c-.102-.058-.578-.518-.68-.575-.045.07.051.436 0 .5.057-.064-.057.07 0 0-.013.013-.204-.12-.18.223l-.21.12-.11.157h-.5c.102.064.71.486.82.55.146.089.299.171.452.254.05.026.095.051.146.07.077.039.16.077.236.115l.07.032.134.064c.108.05.21.102.325.146.102.045.204.083.313.115l.146.05.121.045c.109.045.223.083.332.122.114.038.236.07.35.101l.102.026c.153.044.3.083.453.115l.127.031.332.077c.102.019.204.032.312.05l.147.02.133.02c.109.018.217.037.326.044.12.012.248.025.37.031h.082c.147.02.287.026.453.032h.152c.102.013.204.026.306.026.102 0 .198 0 .3-.013h.153l.057-.013c.134 0 .268-.012.395-.019l.453-.038c.115-.013.23-.032.344-.05l.109-.02.14-.02c.102-.012.21-.025.312-.044.108-.019.21-.044.313-.076l.14-.032c.153-.038.306-.07.452-.115.153-.044.306-.089.453-.134l.382-.133.07-.026.147-.05c.102-.039.21-.07.312-.115.102-.045.204-.096.306-.147l.147-.07.127-.064c.064-.032.134-.063.204-.095l.128-.058.025-.012c.108-.058.21-.115.313-.179l.12-.07h.013c.147-.095.293-.178.44-.274.153-.102.306-.204.453-.312a11.867 11.867 0 0 0 .905-.713c.153-.134.306-.268.452-.415l.051-.05c.038-.039.083-.07.121-.109.064-.064.128-.134.185-.204l.096-.102.07-.076c.134-.14.261-.28.382-.427.147-.172.274-.35.408-.535l.051-.064c.16-.216.313-.44.453-.662.153-.242.306-.491.452-.778 0-.012.013-.019.02-.031.025-.052.044-.096.07-.147.133-.268.255-.522.363-.777.166-.402.319-.835.452-1.325.3-1.07.453-2.16.453-3.243 0-1.083-.191-2.154-.49-3.217Z"
          fill={primary.dark}
        />
        <path
          d="M13.784 25.776c-.153-.102-.306-.198-.453-.306a11.87 11.87 0 0 1-.905-.714 10.348 10.348 0 0 1-.905-.88l-.09-.094a11.254 11.254 0 0 1-.369-.408c-.14-.166-.268-.344-.401-.523l-.058-.076a9.448 9.448 0 0 1-.452-.669l-.013-.025-.178.178-.185.185-.185.184-.185.185-.185.185-.185.185-.184.184-.185.185-.185.185-.185.185-.185.184-.185.185-.185.185-.184.185-.185.184-.185.185-.185.185-.185.185-.185.184-.184.185-.185.185-.185.185-.185.185-.185.184-.185.185-.184.185-.185.185-.185.184-.147.147s-.025.032-.038.045c-.064.063-.115.133-.166.203-.057.07-.114.14-.159.21-.051.077-.09.16-.127.243a1.829 1.829 0 0 0-.115.255 1.62 1.62 0 0 0-.083.286c-.026.102-.045.21-.057.312-.013.115-.032.223-.032.338 0 .14.019.274.038.408.025.172.07.337.127.497.128.363.332.7.619.994.286.286.63.49.994.617a2.838 2.838 0 0 0 .905.166c.115 0 .223-.019.338-.032.108-.012.21-.032.312-.057.096-.026.191-.051.287-.083.09-.032.172-.076.255-.114a1.76 1.76 0 0 0 .242-.128c.077-.044.14-.108.21-.16.07-.057.14-.101.204-.165.013-.013.032-.025.045-.038l.147-.147.184-.184.185-.185.185-.185.185-.185.185-.184.185-.185.184-.185.185-.185.185-.184.185-.185.185-.185.185-.185.185-.184.184-.185.185-.185.185-.185.185-.184.185-.185.185-.185.184-.185.185-.184.185-.185.185-.185.185-.185.185-.184.184-.185.185-.185.185-.185c-.05-.032-.095-.057-.146-.089l-.013-.006Z"
          fill={primary.dark}
        />
        <path
          d="m14.122 25.68.184-.185.147-.146.038-.045c.064-.064.115-.134.166-.204.051-.064.108-.134.153-.197-.21-.121-.357-.29-.618-.37-.007 0 .308-.033-.026-.013-.166-.52-.605-.458-.892-.707-.051-.044-.223-.275-.274-.313-.274-.242-.276-.378-.644-.579.144.079.201.066.144.079-.236-.268-.29-.713-.5-1-.07-.096-.436-.405-.5-.5-.121-.172 0 0-.412-.286-.064.045-.121.095-.185.14-.07.057-.14.102-.204.166-.013.012-.032.025-.045.038l-.146.146-.185.185-.185.185h-.006l.012.032c.147.23.293.452.453.669l.057.076c.128.179.262.357.402.523.115.14.242.274.37.407l.089.096a10.499 10.499 0 0 0 .905.88c.146.127.3.254.452.375.147.121.3.23.453.344.147.108.3.21.452.306.045.032.096.057.147.089l.185-.191h.013Z"
          fill={primary.dark}
        />
        <path
          d="M11.355 21.055c.083-.045.166-.083.255-.115.096-.038.192-.064.287-.083.102-.025.21-.044.312-.057.115-.013.223-.032.338-.032.14 0 .274.02.408.038.172.026.338.07.497.128.364.127.701.33.995.618.286.286.49.63.618.993a2.855 2.855 0 0 1 .166.905c0 .115-.02.23-.032.338-.013.108-.032.21-.058.312a4.83 4.83 0 0 1-.082.287c-.032.089-.077.172-.115.254-.039.083-.077.166-.128.243v.012c.096.058.191.128.293.179.166.089.332.178.504.26.134.065.274.128.414.186.3.127.606.248.918.35.3.096.606.185.918.255.064.013.121.032.185.044.242.051.49.077.733.115.3.038.605.064.918.077.153.006.305.025.458.025.154 0 .306-.02.46-.025.312-.013.618-.039.917-.077.249-.032.497-.064.74-.115.063-.012.12-.031.184-.044.313-.07.619-.153.918-.255.313-.102.618-.217.918-.35.14-.058.28-.121.42-.185.173-.083.339-.172.504-.261.313-.172.625-.35.918-.555.006 0 .02-.012.026-.012.312-.217.605-.453.892-.701.05-.045.102-.083.147-.128a9.79 9.79 0 0 0 .77-.77l.058-.058c.236-.267.459-.541.67-.828.07-.096.127-.191.19-.287.122-.178.243-.357.358-.541.159-.268.305-.548.44-.828.044-.096.076-.192.12-.287.083-.178.16-.357.23-.542.102-.274.198-.547.274-.828.076-.274.153-.548.204-.828.05-.274.095-.548.127-.828.032-.274.045-.548.058-.828 0-.134.019-.268.019-.402 0-.146-.013-.28-.02-.427-.012-.28-.025-.554-.057-.828a8.946 8.946 0 0 0-.337-1.656 9.733 9.733 0 0 0-.504-1.351c-.045-.102-.083-.204-.134-.306a9.368 9.368 0 0 0-.446-.828 11.515 11.515 0 0 0-1.262-1.701 10.17 10.17 0 0 0-1.836-1.605 11.065 11.065 0 0 0-1.835-1.02 11.253 11.253 0 0 0-1.836-.586c-.3-.07-.605-.127-.918-.166-.3-.038-.612-.063-.918-.076a11.029 11.029 0 0 0-.459-.013c-.152 0-.305.007-.458.013-.313.013-.619.038-.918.076a8.63 8.63 0 0 0-.918.166 10.794 10.794 0 0 0-1.836.586 10.2 10.2 0 0 0-.918.453 10.979 10.979 0 0 0-1.836 1.274c-.324.28-.63.58-.917.898-.331.363-.637.752-.918 1.166-.12.172-.23.35-.338.529-.159.267-.306.547-.446.828-.05.102-.089.204-.134.306-.076.172-.159.344-.223.522-.102.274-.197.548-.28.828-.077.274-.153.548-.21.829a8.95 8.95 0 0 0-.128.828 8.887 8.887 0 0 0-.057.828c0 .14-.02.28-.02.427 0 .134.013.267.02.401.012.28.025.554.057.828.032.28.07.555.127.829.058.28.128.554.205.828.082.28.172.554.274.828.07.185.152.363.229.541.045.096.077.192.121.287.134.287.28.56.44.828 0 0 .019 0 .025-.012.077-.051.317-.138.4-.176l-.145.055Zm10.39-11.442A.96.96 0 0 1 23 9.103c.873.37 1.651.892 2.32 1.56a7.198 7.198 0 0 1 1.562 2.313.96.96 0 0 1-.88 1.332.95.95 0 0 1-.88-.586 5.418 5.418 0 0 0-2.868-2.86.96.96 0 0 1-.51-1.256v.007Z"
          fill="#FFC7A1"
        />
        <path
          d="M11.63 22.023c.21.287.433.56.669.828l.057.058c.249.267.504.529.771.77.045.045.096.083.147.122.287.248.58.49.892.707.007 0 .02.012.026.012.197.134.408.249.618.37v-.013c.057-.076.095-.159.134-.242.044-.083.083-.165.114-.255.039-.095.064-.19.083-.286a2.67 2.67 0 0 0 .058-.313c.012-.114.032-.223.032-.337 0-.14-.02-.274-.039-.408a2.59 2.59 0 0 0-.127-.497 2.683 2.683 0 0 0-.618-.994 2.633 2.633 0 0 0-.995-.618 2.846 2.846 0 0 0-.905-.165c-.115 0-.23.019-.338.032a2.45 2.45 0 0 0-.312.057c-.095.025-.191.05-.287.083-.089.032-.172.076-.255.114a1.764 1.764 0 0 0-.242.128c-.006 0-.019.013-.025.019.108.185.23.357.35.529.064.095.121.197.191.293v.006Z"
          fill="#FFC7A1"
        />
        <path
          d="M22.255 10.868a5.49 5.49 0 0 1 1.714 1.153 5.32 5.32 0 0 1 1.154 1.707.96.96 0 0 0 .88.587.96.96 0 0 0 .88-1.332 7.3 7.3 0 0 0-1.563-2.313A7.16 7.16 0 0 0 23 9.11a.96.96 0 0 0-1.255.51.96.96 0 0 0 .51 1.254v-.006Z"
          fill={gray['FF']}
        />
      </symbol>
      <symbol id="link" viewBox="0 0 14 8">
        <path
          fill={gray['8F']}
          d="M10.334.667H7.667V2h2.667c1.1 0 2 .9 2 2s-.9 2-2 2H7.667v1.333h2.667a3.335 3.335 0 0 0 0-6.666zM6.334 6H3.667c-1.1 0-2-.9-2-2s.9-2 2-2h2.667V.667H3.667a3.335 3.335 0 0 0 0 6.666h2.667V6zm-2-2.667h5.333v1.334H4.334V3.333z"
        />
      </symbol>
    </svg>
  );
};

export default SvgSprite;
