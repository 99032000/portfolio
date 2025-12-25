"use client";

import StaggeredMenu from "@/src/components/Menu/StaggeredMenu";
import { menuItems, socialItems } from "./data";
export default function Header() {
    return (
      <nav >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="black"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl="/assets/damon.png"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
          isFixed={true}
        />
      </nav>
    );
}