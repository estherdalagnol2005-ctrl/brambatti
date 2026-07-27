/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, CheckCircle2, MapPinned, XCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import ScrollFadeIn from './ScrollFadeIn';

const RS_STATE_PATH = `M 18 242 L 33 254 L 42 275 L 42 285 L 22 309 L 34 321 L 57 327 L 95 372 L 109 381 L 115 394 L 113 421 L 103 430 L 83 431 L 84 445 L 76 459 L 100 481 L 95 505 L 102 510 L 123 510 L 144 536 L 138 556 L 124 569 L 110 598 L 141 593 L 154 607 L 179 596 L 201 601 L 213 588 L 232 586 L 248 572 L 272 572 L 313 563 L 347 566 L 375 589 L 374 602 L 359 634 L 370 657 L 368 669 L 373 688 L 356 714 L 315 729 L 295 724 L 274 705 L 221 700 L 200 724 L 165 725 L 159 750 L 139 772 L 146 782 L 153 819 L 181 848 L 198 860 L 219 858 L 257 872 L 269 887 L 274 903 L 342 955 L 358 952 L 367 959 L 372 947 L 394 931 L 404 908 L 420 893 L 436 889 L 436 868 L 442 854 L 434 837 L 449 821 L 456 787 L 471 764 L 469 746 L 478 734 L 509 730 L 518 709 L 525 704 L 537 704 L 555 715 L 562 727 L 563 742 L 553 760 L 573 761 L 603 754 L 630 765 L 661 754 L 658 727 L 674 717 L 684 720 L 699 737 L 702 750 L 696 767 L 719 781 L 731 804 L 739 804 L 758 790 L 770 790 L 780 798 L 788 815 L 785 831 L 776 838 L 762 839 L 750 853 L 742 903 L 704 923 L 704 933 L 698 942 L 705 953 L 702 975 L 728 1000 L 775 954 L 875 896 L 983 796 L 1063 684 L 1117 554 L 1127 544 L 1131 528 L 1146 503 L 1172 474 L 1183 454 L 1180 448 L 1165 444 L 1157 434 L 1144 429 L 1136 417 L 1142 383 L 1139 349 L 1169 316 L 1191 312 L 1184 306 L 1180 293 L 1151 282 L 1121 286 L 1109 281 L 1081 283 L 1024 274 L 1011 268 L 996 247 L 989 244 L 986 249 L 994 262 L 990 295 L 982 302 L 967 305 L 953 320 L 938 320 L 924 313 L 914 298 L 931 266 L 926 245 L 934 235 L 930 226 L 931 203 L 938 192 L 921 162 L 890 149 L 875 131 L 852 121 L 844 110 L 833 109 L 816 96 L 784 96 L 764 91 L 755 84 L 753 74 L 732 68 L 713 54 L 674 53 L 661 44 L 651 49 L 607 48 L 580 34 L 572 37 L 557 32 L 546 17 L 532 28 L 508 35 L 480 19 L 469 28 L 457 27 L 435 38 L 384 26 L 369 31 L 345 55 L 325 52 L 318 72 L 307 80 L 280 80 L 260 91 L 247 90 L 221 108 L 203 104 L 197 117 L 186 124 L 186 139 L 178 149 L 153 151 L 143 166 L 129 167 L 117 179 L 104 181 L 85 208 L 60 219 L 49 218 L 36 236 Z`;

const UNSERVED_AREA_PATHS = [
  `M 286 105 L 281 114 L 288 126 L 288 133 L 274 135 L 270 149 L 253 146 L 252 152 L 243 154 L 244 164 L 228 171 L 228 174 L 251 190 L 268 190 L 278 179 L 286 178 L 288 167 L 295 167 L 300 173 L 312 177 L 328 195 L 338 197 L 339 202 L 343 204 L 343 214 L 310 224 L 279 221 L 279 230 L 272 231 L 270 237 L 257 244 L 254 253 L 269 260 L 300 260 L 304 264 L 318 265 L 319 261 L 328 261 L 329 265 L 361 262 L 362 280 L 366 289 L 377 292 L 379 296 L 386 296 L 394 289 L 400 289 L 403 283 L 415 287 L 415 296 L 401 299 L 401 302 L 409 307 L 411 319 L 408 340 L 399 351 L 404 361 L 412 363 L 424 377 L 444 378 L 448 363 L 442 351 L 443 343 L 472 341 L 474 346 L 489 347 L 492 340 L 502 336 L 506 324 L 489 310 L 474 310 L 465 299 L 465 288 L 473 279 L 473 274 L 480 269 L 476 242 L 489 238 L 491 228 L 485 226 L 484 220 L 475 220 L 473 211 L 466 209 L 452 213 L 449 206 L 437 202 L 431 211 L 431 234 L 427 243 L 417 248 L 398 247 L 392 243 L 391 227 L 399 213 L 399 205 L 391 205 L 389 208 L 364 205 L 351 190 L 351 182 L 346 182 L 338 173 L 335 163 L 336 149 L 339 148 L 340 141 L 349 141 L 354 135 L 353 127 L 345 121 L 323 118 L 321 106 L 315 104 L 314 98 L 309 96 L 293 105 Z`,
  `M 728 255 L 716 259 L 694 257 L 690 254 L 690 247 L 694 245 L 694 238 L 690 237 L 690 232 L 659 227 L 653 221 L 653 217 L 633 218 L 600 238 L 594 238 L 590 231 L 576 234 L 571 228 L 559 227 L 542 241 L 530 243 L 528 250 L 543 252 L 548 256 L 548 265 L 561 261 L 564 267 L 579 268 L 606 262 L 609 251 L 612 248 L 619 248 L 622 252 L 628 253 L 630 259 L 639 259 L 645 263 L 647 274 L 651 275 L 647 287 L 670 288 L 675 294 L 675 302 L 671 303 L 671 306 L 677 307 L 683 317 L 680 329 L 656 327 L 627 317 L 626 339 L 604 338 L 608 348 L 607 388 L 603 391 L 589 392 L 589 406 L 594 412 L 602 416 L 604 407 L 613 398 L 618 382 L 636 383 L 647 394 L 651 394 L 653 370 L 687 364 L 685 348 L 697 326 L 697 322 L 690 318 L 690 310 L 699 308 L 702 292 L 726 292 L 734 288 L 726 277 Z`,
  `M 813 452 L 813 460 L 826 462 L 828 478 L 835 477 L 836 474 L 843 475 L 842 489 L 811 493 L 815 513 L 825 526 L 826 539 L 837 540 L 843 548 L 853 552 L 871 549 L 870 538 L 864 537 L 864 530 L 870 529 L 870 525 L 863 521 L 865 508 L 862 507 L 862 500 L 850 499 L 853 475 L 861 476 L 864 496 L 874 496 L 875 492 L 883 492 L 884 486 L 892 486 L 893 495 L 888 496 L 888 499 L 893 502 L 894 508 L 902 507 L 902 495 L 906 493 L 925 497 L 932 494 L 965 496 L 966 505 L 962 510 L 957 510 L 949 520 L 948 542 L 964 543 L 971 538 L 997 540 L 1001 521 L 1009 521 L 1024 530 L 1038 523 L 1061 527 L 1071 520 L 1071 516 L 1065 515 L 1063 486 L 1051 489 L 1048 493 L 1010 496 L 1007 487 L 1002 483 L 1003 470 L 1000 467 L 984 469 L 983 474 L 978 474 L 967 481 L 957 481 L 956 475 L 943 465 L 935 472 L 934 480 L 924 479 L 918 481 L 917 485 L 886 482 L 885 475 L 878 475 L 877 482 L 866 481 L 865 472 L 871 471 L 873 464 L 870 454 L 888 449 L 888 435 L 883 434 L 883 410 L 871 408 L 868 401 L 863 399 L 856 401 L 857 425 L 843 426 L 843 440 L 833 441 L 832 445 L 816 445 L 816 451 Z`,
  `M 766 416 L 746 415 L 745 422 L 748 422 L 749 428 L 752 429 L 755 445 L 746 446 L 737 456 L 733 456 L 734 466 L 728 469 L 694 471 L 673 456 L 660 454 L 657 457 L 658 494 L 636 501 L 636 505 L 642 505 L 654 518 L 652 546 L 656 568 L 663 565 L 663 557 L 669 552 L 685 551 L 686 524 L 699 524 L 704 519 L 710 519 L 720 529 L 744 528 L 751 531 L 752 537 L 755 537 L 756 528 L 751 521 L 751 512 L 758 510 L 759 501 L 764 501 L 771 494 L 783 489 L 797 490 L 799 487 L 806 487 L 809 479 L 806 478 L 805 468 L 789 468 L 788 463 L 777 460 L 777 455 L 766 454 L 766 445 L 772 443 L 774 435 Z`,
  `M 700 94 L 696 94 L 694 98 L 679 98 L 678 101 L 679 128 L 683 129 L 681 146 L 689 146 L 690 151 L 694 153 L 717 144 L 716 129 L 711 125 L 710 109 L 704 108 Z`,
  `M 538 156 L 538 168 L 555 175 L 557 188 L 563 188 L 566 192 L 564 204 L 571 207 L 583 206 L 587 196 L 599 189 L 601 181 L 590 172 L 557 168 L 549 155 Z`,
  `M 813 365 L 813 369 L 808 370 L 807 375 L 817 376 L 816 397 L 820 400 L 834 399 L 837 404 L 842 404 L 843 395 L 851 389 L 853 375 L 850 374 L 850 365 Z`,
  `M 742 354 L 741 361 L 750 371 L 760 373 L 761 377 L 768 374 L 788 374 L 786 364 L 778 358 L 778 340 L 753 341 L 753 352 Z`,
  `M 495 43 L 487 42 L 475 59 L 457 55 L 458 63 L 466 71 L 470 83 L 486 82 L 504 74 L 505 66 L 495 52 Z`,
  `M 722 196 L 726 202 L 726 217 L 746 220 L 751 216 L 764 216 L 764 202 L 759 193 L 751 191 L 749 195 L 741 195 L 726 190 Z`,
  `M 57 261 L 39 269 L 42 275 L 39 290 L 53 288 L 64 282 L 66 270 Z`,
  `M 959 316 L 946 322 L 935 319 L 935 328 L 945 347 L 958 338 Z`,
  `M 804 406 L 804 419 L 809 419 L 810 425 L 820 425 L 821 421 L 826 421 L 816 405 Z`,
  `M 898 457 L 885 459 L 887 468 L 897 468 Z`,
  `M 989 296 L 980 304 L 981 307 L 992 311 Z`,
  `M 918 284 L 908 286 L 909 302 L 916 302 L 914 293 Z`,
];

export default function ServiceArea() {
  const handleContact = () => {
    window.open(
      getWhatsAppLink(
        'Olá! Gostaria de solicitar atendimento comercial da Brambatti no Rio Grande do Sul.'
      ),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="atendimento"
      className="relative overflow-hidden bg-[#0B0B0A] py-20 text-[#E5E0DC] md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#48523B]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#48523B]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <ScrollFadeIn delay={100} className="lg:col-span-5">
            <span className="mb-3 block font-serif text-lg italic text-[#7F8B6B]">
              Atendimento Comercial RS
            </span>

            <h2 className="max-w-xl font-sans text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Atendemos todo o{' '}
              <span className="text-[#7F8B6B]">Rio Grande do Sul</span>
            </h2>

            <p className="mt-7 max-w-xl font-sans text-sm leading-7 text-[#E5E0DC]/75">
              A Brambatti realiza atendimento comercial e envios para todo o estado, com
              agilidade, suporte próximo e acesso às melhores marcas do segmento profissional.
            </p>

            <div className="mt-6 border-l-2 border-[#7F8B6B] pl-4">
              <p className="font-sans text-sm leading-6 text-[#E5E0DC]/90">
                As áreas preenchidas representam nossa cobertura. Somente os municípios sem
                preenchimento e contorno vermelho ficam fora do atendimento.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:gap-7">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#AAB594]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5E0DC]/80">
                  Regiões atendidas
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <XCircle className="h-4 w-4 text-[#E13232]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5E0DC]/80">
                  Exceções sem atendimento
                </span>
              </div>
            </div>

            <button
              onClick={handleContact}
              className="group mt-8 inline-flex h-12 w-full items-center justify-center gap-3 bg-[#48523B] px-7 font-sans text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#59654A] sm:w-auto"
            >
              Solicitar atendimento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </ScrollFadeIn>

          <ScrollFadeIn delay={220} className="lg:col-span-7">
            <div className="mx-auto w-full max-w-[720px] border border-white/10 bg-[#F3F1EB] p-4 sm:p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-black/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <MapPinned className="h-4 w-4 text-[#48523B]" />
                  <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#48523B]">
                    Cobertura estadual
                  </span>
                </div>

                <span className="hidden font-serif text-xs italic text-[#615F55] sm:block">
                  Rio Grande do Sul
                </span>
              </div>

              <svg
                viewBox="0 0 1200 1017"
                role="img"
                aria-labelledby="rs-map-title rs-map-description"
                className="mx-auto block h-auto w-full max-w-[610px]"
              >
                <title id="rs-map-title">Mapa de cobertura da Brambatti no Rio Grande do Sul</title>
                <desc id="rs-map-description">
                  As áreas verdes são atendidas. As áreas sem preenchimento e com contorno vermelho
                  representam as exceções sem atendimento.
                </desc>

                <path
                  d={RS_STATE_PATH}
                  fill="#AAB594"
                  stroke="#48523B"
                  strokeWidth="7"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />

                {UNSERVED_AREA_PATHS.map((path, index) => (
                  <path
                    key={`${index}-${path.slice(0, 20)}`}
                    d={path}
                    fill="#F3F1EB"
                    stroke="#E13232"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/10 pt-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 border border-[#48523B]/40 bg-[#AAB594]" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#615F55]">
                    Área atendida
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 border-2 border-[#E13232] bg-[#F3F1EB]" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#615F55]">
                    Município não atendido
                  </span>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
