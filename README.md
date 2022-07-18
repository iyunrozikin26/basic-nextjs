# basic to learn NextJs

## Apa itu NextJs
   React Framework yang siap untuk Production
## Kenapa NextJs ?
   - Mudah untuk setup project
   - Routing yang mudah (cukup buat file di folder pages, maka akan auto menjadi routing pagenya)
   - Performa yang baik dengan code splitting, client-side navigation, dan prefetching
   - Easy to deploy
   - SEO Friendly 
   - Pre-Rendering Page

## How to setup NextJs
   - setup dengan typescript `npx create-next-app@latest --typescript`

1. Performa yang baik dikarenakan ketika masuk ke browser semua page siap untuk di request client
1. jadi hanya akan menjalankan yang dipanggil sekali saja dan ketika berpindah halaman kemudian kembali lagi pemanggilan tidak akan diulang tapi tetap bisa masuk ke page yg telah di render tadi (bundle page siap dipanggil kemudian akan berpengaruh kepada Performa)


