import ProductInfo from '../../components/productdetail/ProductInfo';
import styles from './ProductDetail.module.css';
import SizeInfo from '../../components/productdetail/SizeInfo';
import ProductDetailSection from '../../components/productdetail/ProductDetailSection';
import StyleSection from '../../components/productdetail/StyleSection';
import ProductCard from '../../components/commons/card/ProductCard';
import ProductListGrid from '../../components/productdetail/ProductListGrid';
import { FastDelBadge, ProductBadge } from '../../components/commons/badge/ProductBadge';

function ProductDetail() {

  //서버에서 온 데이터 가정,,,
  const productData = {
    eng_name: "Nice Shoes",
    kor_name: "멋진 신발",
    ready_price: 140000,
    recent_price: 120000,
    release_price: 109000,
    release_date: "23/12/01",
    color: "Black",
    size:[230,240,250,260,270,280],
    model_id: "1A2B3C4D5",
    thumbnail:[
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202110/20/68601da8-f00d-4fe4-bd85-edac1cbbbda1.jpg",
      "https://img.croket.co.kr/item/thumbnail/f1b78a2f9a837119f9be4100e31ac0d1.webp",
      "https://img.goldii.com/goods/pickout21/big/W870H1305_121572_20230313153318212.jpg",
    ],
    trade_list:[
      {size: 230, price: 90000},
      {size: 230, price: 90000},
      {size: 230, price: 90000},
    ],
    trade_log:[
      {size: 230, price: 90000, date: "23/12/01"},
      {size: 240, price: 95000, date: "23/12/02"},
      {size: 240, price: 96000, date: "23/11/29"},
    ],
    wish_count: 429,
    brand_eng_name: "Jordan",
    brand_kor_name: "조던",
    brand_logo: "",
    style_count:67,
    style:[
      {
        thumnail:"",
        user:{
          name:"sdf",
          image:"",
        },
        like_count:5,
        content:"멋진 신발이네요.",
      }
    ]
  }

  return (
    <div className={styles.contentContainer}>
      <ProductInfo info={productData}/>
      <SizeInfo/>
      <ProductDetailSection title={"스타일 432"}>
      <StyleSection isObserver={false}/>
      </ProductDetailSection>
      <hr style={{background: "#ebebeb", height: "1px", border:"0", margin: "25px 0"}}></hr>
      <ProductDetailSection title={"브랜드배송 추천 상품"} more={true}>
        <ProductListGrid>
          <ProductCard badges={<FastDelBadge />}/>
          <ProductCard badges={[<ProductBadge content={"적립"}/>,<ProductBadge content={"무료배송"}/>]}/>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductListGrid>
      </ProductDetailSection>
      <ProductDetailSection title={"Jordan의 다른 상품"} more={true}>
        <ProductListGrid>
          <ProductCard badges={<FastDelBadge />}/>
          <ProductCard />
          <ProductCard />
          <ProductCard badges={[<ProductBadge content={"적립"}/>,<ProductBadge content={"무료배송"}/>]}/>
          <ProductCard />
        </ProductListGrid>
      </ProductDetailSection>
    </div>
  );
}

export default ProductDetail;