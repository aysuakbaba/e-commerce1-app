import classes from './Footer.module.css'

function Footer(){
    return(
        <>
         <div className={classes.footer}>
            <div  className={classes.block}>
                <h4>Kurumsal Bilgiler</h4>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/" >Anasayfa</a>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/">Hakkimizda</a>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/">Mağazalarimiz</a>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/">Bize Ulaşin</a>

            </div>
            <div className={classes.block}>
                <h4>Müşteri İlişkileri</h4>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/">Gizlilik Politikasi</a>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/">Mesafeli Satiş Sözleşmesi</a>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/">Kargo Teslimat</a>

            </div>
            <div className={classes.block}>
                <h4>Yardim</h4>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/">Müşteri Hizmetleri</a>
                <a href="https://www.linkedin.com/in/aysu-akbaba-a18483223/">Kargo Takibi</a>

            </div>

            </div>
        </>
    )
}




export default Footer