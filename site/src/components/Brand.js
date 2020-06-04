/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { Link } from 'gatsby'
import design from '../images/design.svg'
import apparel from '../images/apparel.svg'
import experiential from '../images/experiential.svg'
import marketing from '../images/marketing.svg'
import print from '../images/print.svg'
import promo from '../images/promo.svg'
import web from '../images/web.svg'
import yourBrand from '../images/yourBrand.svg'

export const Brand = (props) => (
  <Box sx={{ bg: 'black', height: '100%', p: [0, 25, 50] }}>
    <svg fill="none" viewBox="0 0 1920 1080" {...props}>
      <rect width="1920" height="1080" fill="#000" />
      <g
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke="#fff"
        stroke-width="6"
      >
        <path
          id="designLine"
          className="line"
          d="M978.3 477.8c25.4-15.6 62.3-34.4 78.9-71.7 14.1-31.4 11.3-80.4 10.5-90.5-.8-10.1-4.3-35.7-4.3-35.7"
        />
        <path
          id="printLine"
          className="line"
          d="M1111.4 483.3s9.6-29.3 34.5-65.6c23.6-34.4 36-57 66.7-92.3 38.4-44.2 82.3-65.1 82.3-65.1"
        />
        <path
          id="apparelLine"
          className="line"
          d="M1124.6 524.7s15.8 8.8 49.4 13.7c33.6 4.8 53.2 2 70.4-1.3 17.2-3.2 31.4-17.2 35.4-27.1 4-9.9.5-24.4-13.8-28.2-14.4-3.8-19.8 7-19 14.2.7 7.2 9.7 17.2 22.3 19.2s33.8 2.2 66.3-2.7c26.6-4 46.7 2 46.7 2"
        />
        <path
          id="promoLine"
          className="line"
          d="M1161.9 610.8s15.9-7.1 31.4-5.9 26.8 5 46.4 18.8c19.5 13.8 37 39.7 48.5 62.4 11.5 22.8 22 49.5 28.4 63.3 6.3 13.8 18.4 39.1 33.3 54.5 13.1 13.5 33.8 23.9 57.6 14.6"
        />
        <path
          id="webLine"
          className="line"
          d="M776.1 581.7s-22.6 39.8-32.7 61.6c-10.1 21.8-19.1 43.6-22.6 59.6-4.1 19-2.4 43.8 12.1 53.5 9 6 33.5 14.8 53.7 8.6 20.1-6.2 19.5-28.2 16.4-36.1s-15.6-30.3-40.2-12c-25.6 19-34 50-37.4 64.8-2.9 12.8-4.8 44.3 14.7 61.3 11.2 9.8 31.5 17.3 54.5 4.7 23-12.5 40.8-39.2 40.8-39.2"
        />
        <path
          id="marketingLine"
          className="line"
          d="M681.6 534.4s-60.5-6.7-107.1-2.2C528 536.8 496.8 551.9 473 571c-23.8 19.1-51 50.6-65.7 94.3"
        />
        <path
          id="experientialLine"
          className="line"
          d="M758.5 462.3s-15.4-43.7-33-63.9c-15.8-18.1-31.5-29.6-56.9-32.3-20.1-2.2-39.3 2.6-40.5 13.5-1.3 10.9 16 17.5 24.3 12.4 8.3-5.2 19.6-13.4 15.7-38.3-3.9-25.5-28.2-42.4-44.1-51.5-15.9-9.1-35.9-17.3-60.9-19.7"
        />
        <path
          id="arr_design"
          className="line"
          d="M1083.15 300.517s-8.128-13.024-16.316-23.517c-6.169 8.811-12.028 28.076-12.028 28.076s16.354-23.719 18.495-26.533"
        />
        <path
          id="printArr"
          className="arrow"
          d="M1267.25 252.644s7.286.751 11.93 2.249c4.644 1.498 13.531 4.134 17.066 3.615-2.351 5.4-6.055 13.029-8.266 17.133-1.399 2.587-8.056 10.561-8.056 10.561"
        />
        <path
          id="apparelArr"
          className="arrow"
          d="M1375.28 498.393s13.315 15.437 19.667 19.134c-8.874 3.286-32.034 8.799-32.034 8.799"
        />
        <path
          id="promoArr"
          className="arrow"
          d="M1382.99 807.475s4.73 5.692 11.26 8.239c7.339 2.988 12.182 2.219 15.119 2.066-2.087 4.644-6.19 14.118-17.635 22.851 5.107-7.395 17.319-22.838 18.753-24.132"
        />
        <path
          id="webArr"
          className="arrow"
          d="M819.708 809.239s16.325-6.981 24.744-13.935c-.03 6.046-1.107 33.214-1.107 33.214"
        />
        <path
          id="marketingArr"
          className="arrow"
          d="M399.357 646.653l2.86 21.14s13.249-11.662 34.01-20.564"
        />
        <path
          id="experientialArr"
          className="arrow"
          d="M576.006 265.906S570.2 274.775 563 282.5c4.061 1.61 6.421 5.161 7.17 10.762"
        />
      </g>
      <image href={yourBrand} x="699.77" y="489.82" width="440" height="207" />
      <Link to="service/design">
        <image
          id="designImg"
          className="img"
          href={design}
          x="694.22"
          y="107.15"
          width="471"
          height="210"
        />
      </Link>
      <image
        id="printImg"
        className="img"
        href={print}
        x="1327.201"
        y="79.649"
        width="387"
        height="270"
      />
      <image
        id="apparelImg"
        className="img"
        href={apparel}
        x="1419.14"
        y="398.25"
        width="401"
        height="210"
      />
      <image
        id="promoImg"
        className="img"
        href={promo}
        x="1442.91"
        y="723.88"
        width="382"
        height="197"
      />
      <image
        id="webImg"
        className="img"
        href={web}
        x="831.066"
        y="746.86"
        width="483"
        height="205"
      />
      <image
        id="marketingImg"
        className="img"
        href={marketing}
        x="106.455"
        y="639.031"
        width="511"
        height="325"
      />
      <image
        id="experientialImg"
        className="img"
        href={experiential}
        x="85.84"
        y="153.94"
        width="437"
        height="305"
      />
    </svg>
  </Box>
)

export default Brand
