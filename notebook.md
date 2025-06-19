✓ Generating static pages (212/212)
✓ Collecting build traces
✓ Exporting (3/3)
✓ Finalizing page optimization

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    5.64 kB         107 kB
├ ○ /_not-found                            974 B         102 kB
├ ○ /about                                 149 B         101 kB
├ ○ /albums                                149 B         101 kB
├ ● /blog/[slug]                           149 B         101 kB
├   └ /blog/1
├ ○ /client-albums                         434 B         101 kB
├ ○ /portfolio                             149 B         101 kB
├ ○ /posts                                 414 B         101 kB
├ ● /posts/[postId]                        595 B         102 kB
├   ├ /posts/1
├   ├ /posts/2
├   ├ /posts/3
├   └ [+97 more paths]
├ ○ /server-albums                         149 B         101 kB
└ ● /server-albums/[albumId]               407 B         101 kB
    ├ /server-albums/1
    ├ /server-albums/2
    ├ /server-albums/3
    └ [+97 more paths]
+ First Load JS shared by all             101 kB
  ├ chunks/20-44c6e118b1a3c7b7.js        45.9 kB
  ├ chunks/40bf5d38-1420f4e01f940b0e.js  53.2 kB
  └ other shared chunks (total)          1.88 kB
```

○ (Static) prerendered as static content
● (SSG) prerendered as static HTML (uses generateStaticParams)
