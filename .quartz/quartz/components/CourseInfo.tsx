import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Course details for the right sidebar, in the slot the graph used to occupy.
// Styled by the .course-info rules in ../styles/custom.scss.
function CourseInfo({ displayClass }: QuartzComponentProps) {
  return (
    <div class={classNames(displayClass, "course-info")}>
      <h3>VM303-01</h3>
      <p>
        <a href="https://emerson.edu/academics/academic-departments/visual-media-arts">
          Department of Visual &amp; Media Arts
        </a>
        <br />
        <a href="https://emerson.edu/">Emerson College</a>
      </p>
      <p>
        Fall Semester 2026
        <br />
        Tues/Thur 3 Sept-10 Dec 2026
        <br />
        18:00-19:45
        <br />
        Ansin Building 605
      </p>
      <p>
        <a href="http://mroberts1.github.io/">Dr. Martin Roberts</a>
        <br />
        Office: TBA
        <br />
        Hours: Tues/Thur 14:30-3:30
      </p>
      <p class="course-info-icons">
        <a href="mailto:martin_roberts@emerson.edu" aria-label="Email">
          <svg role="img" viewBox="0 0 512 512" height="1em" fill="currentColor" style="vertical-align:-0.125em">
            <title>Email</title>
            <path d="M0 128Q1 101 19 83Q37 65 64 64H448Q475 65 493 83Q511 101 512 128V384Q511 411 493 429Q475 447 448 448H64Q37 447 19 429Q1 411 0 384V128ZM48 128V150L221 292Q237 304 256 304Q275 304 292 292L464 150V127Q463 113 448 111H64Q49 113 48 127V128ZM48 212V384Q49 399 64 400H448Q463 399 464 384V212L322 329Q292 352 256 352Q220 352 189 329L48 212Z" />
          </svg>
        </a>
        <a href="https://merveilles.town/@dokoissho" aria-label="Mastodon">
          <svg role="img" viewBox="0 0 448 512" height="1em" fill="currentColor" style="vertical-align:-0.125em">
            <title>Mastodon</title>
            <path d="M433 179Q432 131 416 103Q401 76 386 64Q370 53 369 53Q369 53 369 53Q336 39 280 34Q224 30 168 34Q112 39 79 53Q78 53 62 64Q47 76 32 103Q16 131 15 179Q15 188 15 197Q14 255 19 311Q23 368 46 410Q69 453 121 468Q182 483 224 480Q262 477 283 470Q303 462 303 462Q303 462 303 462L302 425Q301 425 278 430Q256 435 225 435Q193 435 167 426Q141 417 135 381Q134 374 134 367Q195 380 241 379Q288 378 308 374Q311 374 313 374Q356 368 387 346Q418 325 424 301Q431 260 432 221Q433 182 433 179ZM358 304H311V190Q310 165 295 157Q279 148 264 158Q248 168 247 197V260H201V197Q200 168 184 158Q169 148 154 157Q138 165 137 190V304H90Q90 273 90 249Q89 194 92 169Q95 144 109 129Q130 107 161 108Q193 108 212 135L224 155L236 135Q256 108 287 108Q318 107 339 129Q354 144 356 169Q359 194 358 249Q358 272 358 304Z" />
          </svg>
        </a>
        <a href="https://github.com/mroberts1/" aria-label="GitHub">
          <svg role="img" viewBox="0 0 496 512" height="1em" fill="currentColor" style="vertical-align:-0.125em">
            <title>GitHub</title>
            <path d="M166 397Q165 401 161 401Q155 401 155 397Q156 394 160 394Q165 394 166 397ZM135 393Q134 396 139 398Q144 399 145 396Q146 392 141 391Q136 390 135 393ZM179 391Q174 392 174 396Q175 399 180 399Q185 397 185 394Q184 391 179 391ZM245 8Q138 10 70 78Q2 146 0 252Q1 337 47 401Q93 465 170 491Q188 492 187 479Q187 475 187 464Q187 441 187 418Q185 418 168 420Q150 421 130 416Q110 410 102 388Q102 386 94 372Q86 359 74 351Q72 350 66 343Q59 337 76 336Q77 335 90 340Q103 344 114 362Q132 389 153 389Q175 389 187 383Q191 359 203 349Q159 347 126 327Q93 308 91 238Q91 218 97 205Q102 192 114 180Q112 174 110 156Q108 138 117 112Q135 109 159 123Q184 136 186 139Q186 139 186 139Q216 130 249 130Q281 130 312 139Q312 138 325 130Q337 122 353 116Q369 109 381 112Q390 138 388 156Q386 174 383 180Q395 192 402 205Q409 218 409 238Q408 286 392 309Q375 331 349 339Q323 347 294 349Q310 360 311 395Q311 432 311 461Q311 474 311 479Q310 492 328 491Q404 465 450 401Q495 337 496 252Q495 182 462 127Q428 72 372 40Q315 9 245 8ZM97 353Q95 355 98 358Q101 361 103 359Q105 357 102 354Q100 351 97 353ZM86 345Q86 347 89 349Q92 350 93 348Q94 346 91 344Q88 343 86 345ZM119 380Q117 383 120 387Q124 390 127 388Q128 385 125 381Q121 378 119 380ZM107 366Q105 368 107 372Q110 375 113 374Q115 372 113 368Q110 364 107 366Z" />
          </svg>
        </a>
        <a href="https://twitter.com/mroberts_vma" aria-label="Twitter">
          <svg role="img" viewBox="0 0 512 512" height="1em" fill="currentColor" style="vertical-align:-0.125em">
            <title>Twitter</title>
            <path d="M459 152Q460 159 460 165Q460 165 460 165Q460 236 425 304Q391 372 324 417Q258 462 161 464Q71 463 0 417Q12 418 25 418Q100 417 156 373Q120 372 94 352Q68 332 58 301Q67 302 77 302Q92 302 105 299Q68 291 45 263Q22 235 21 196V194Q42 206 68 208Q24 177 21 120Q22 91 36 67Q75 115 131 144Q186 173 252 177Q250 165 250 153Q251 109 280 79Q310 49 354 48Q401 49 431 81Q467 74 498 56Q485 93 452 114Q483 110 512 97Q490 129 459 152Z" />
          </svg>
        </a>
      </p>
    </div>
  )
}

export default (() => CourseInfo) satisfies QuartzComponentConstructor
