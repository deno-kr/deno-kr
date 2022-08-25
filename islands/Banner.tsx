/** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";

const banner = `MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMWNX0OOOOO0KNWMMMMMMMMMMMMMM
MMMMMMMMMMWXko:'....  ....;cxKWMMMMMMMMMM
MMMMMMMMWOc. .    ..   ..    .;xXMMMMMMMM
MMMMMMW0c.   .. ..........  ....,xNMMMMMM
MMMMMNx...   ........,... ... .. .cXMMMMM
MMMMWd......  .   ..     ...  ..   :XMMMM
MMMMO' .. ..  .';cll:;'.   .....    oWMMM
MMMWl  ..  .'lO0XMMMMWN0o.  ......  ,KMMM
MMMX:  ....xNNWXXMMMMMMMW0,   .. .. .OMMM
MMMNc   . 'OWMMMMMWNNWWMMMk.      . .OMMM
MMMWd.  .  .;looolco0XWMMMX:      ..:XMMM
MMMMK;            .dWMMMMMWl     ..'kWMMM
MMMMM0;            lWMMMMMMx.   ...xWMMMM
MMMMMMKc.          cNMMMMMMk'    ;OWMMMMM
MMMMMMMWO:.        lWMMMMMMO'  ,dXMMMMMMM
MMMMMMMMMW0o;..    :0KK0kxoc;ckNMMMMMMMMM
MMMMMMMMMMMMWKkdl::clllloox0NWMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMWWWMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 ▄▄▄   ▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄   ▄▄▄▄▄▄▄ ▄▄▄▄▄▄
█   █ █ █       █   ▄  █ █       █      █
█   █▄█ █   ▄   █  █ █ █ █    ▄▄▄█  ▄   █
█      ▄█  █ █  █   █▄▄█▄█   █▄▄▄█ █▄█  █
█     █▄█  █▄█  █    ▄▄  █    ▄▄▄█      █
█    ▄  █       █   █  █ █   █▄▄▄█  ▄   █
█▄▄▄█ █▄█▄▄▄▄▄▄▄█▄▄▄█  █▄█▄▄▄▄▄▄▄█▄█ █▄▄█`;

export default function Banner() {
  useEffect(() => {
    console.log(banner);
  });

  return <div></div>;
}
