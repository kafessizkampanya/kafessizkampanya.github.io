const addresses = [
    "https://twitter.com/intent/tweet?text=Kafes yumurtası satmaya son verin! @Migros_Turkiye",
    "https://twitter.com/intent/tweet?text=https://kafessizturkiye.com/migrosdurde sitesini gördünüz mü? Neden henüz kafes yumurtasını terk etmediniz?",
    "https://twitter.com/intent/tweet?text=Zalim kafeslerden gelen yumurtaları satmayı bırakın", 
    "https://twitter.com/intent/tweet?text=Kafes yumurtasını reddediyoruz lütfen müşterilerinizi ciddiye alın"];

const address_1 = addresses[Math.floor(Math.random() * addresses.length)]

let mail = address_1

window.location.replace(mail);
