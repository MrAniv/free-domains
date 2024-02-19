// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Domain for minecraft project SMP survival', // describe your project in this field
  domain: '1bt.uk', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'ec', // desired subdomain name
  owner: {
    repo: 'https://github.com/MrAniv',
    email: 'cifireband@gmail.com',
  },
  record: {
    CNAME: 'ec.1bt.uk', // e.g.: <your-github-account>.github.io
    TXT: [],
    A: [],
    AAAA: [],
    NS: ['ns51.cloudns.net', 'ns52.cloudns.net', 'ns53.cloudns.net', 'ns54.cloudns.net'],
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
