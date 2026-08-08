SIKH JUNCTION – PRISM 6:19 OVERLAY V2

CHANGES IN V2
-------------
- Gurdwara vector made much smaller
- Gold Khanda added at bottom left
- Like / Share / Subscribe animation moved to bottom centre
- Bottom layout now reads:
  KHANDA  |  LIKE/SHARE/SUBSCRIBE  |  GURDWARA
- Transparent centre remains clear for video
- Top and bottom gradient shades retained

FILES
-----
index.html
style.css
script.js

TEST
----
Open:
index.html?preview=1

PRISM
-----
Use normal index.html without ?preview=1 after hosting.

EDIT MESSAGES
-------------
Open script.js and change the announcements array.

POSITION CONTROLS
-----------------
In style.css:

Khanda:
.khanda { left: 5.5%; width: 17%; }

Announcement:
.announcement-stage { left: 22%; width: 51%; bottom: 4.0vh; }

Gurdwara:
.gurdwara { right: 1.3%; width: 29%; bottom: 2.4vh; }

V3 CHANGE
---------
Replaced the earlier simplified Khanda with a cleaner inline SVG Khanda for sharper rendering.

V4 CHANGE
---------
- Replaced the simplified Khanda with a more traditional Sikh Khanda SVG.
- Includes central double-edged sword, circular Chakkar, and two curved Kirpans.

V5 CHANGE
---------
- Replaced the generated/drawn Khanda with the exact Khanda supplied by the user.
- Added khanda.webp to the project.
- CSS mask recolours the supplied Khanda in a metallic gold gradient.
- Bottom layout remains: Khanda | Like/Share/Subscribe | Gurdwara.

V6 CHANGE
---------
- Completely removed the Gurdwara vector.
- Added the newly supplied Khanda_(Sikh_Symbol)(2).svg on the RIGHT.
- The uploaded SVG is used directly as the CSS mask and rendered metallic gold.
- Existing supplied Khanda remains on the LEFT.
- Bottom layout is now:
  KHANDA | LIKE / SHARE / SUBSCRIBE | KHANDA

V7 PREMIUM CHANGE
-----------------
- Removed left/right Khanda layout.
- One smaller Khanda is now centered above the social announcement.
- Added rotating gold orbital rings.
- Added radial glow and rotating ray detail.
- Added floating/pulsing Khanda animation.
- Added small sparkle effects.
- Social announcement sits directly below the Khanda.
- SUBSCRIBE changed to COMMENT.
