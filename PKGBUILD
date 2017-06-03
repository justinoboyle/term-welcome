# Maintainer: Justin O'Boyle <justin@justinoboyle.com>
pkgname=term-welcome
pkgver=1.0.0
pkgrel=1
pkgdesc='A friendly login screen.'
arch=('x86_64' 'i686')
url='https://github.com/justinoboyle/term-welcome'
license=('MIT')
depends=('nodejs' 'npm')
makedepends=('nodejs' 'npm')
provides=('term-welcome')
source=("${pkgver}.tar.gz::https://github.com/justinoboyle/term-welcome/archive/"$pkgver".tar.gz")
sha256sums=('fad262b0d0d9cc8cc6182e8c8cfa58aa0393992becea0a0cf848d9de0f085f4d')

prepare() {
  
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  npm install
  npm run build
  npm run daemon-install
}

package() {
  # Place files
  install -d "${pkgdir}/usr/lib/${pkgname}"
  if [ $CARCH == 'x86_64' ]; then
    cp -a "${srcdir}/${pkgname}-${pkgver}/release/linux-unpacked/"* "${pkgdir}/usr/lib/${pkgname}"
  elif [ $CARCH == 'i686' ]; then
    cp -a "${srcdir}/${pkgname}-${pkgver}/release/linux-ia32-unpacked/"* "${pkgdir}/usr/lib/${pkgname}"
  else
    echo "Unknown architecture"; exit 1;
  fi

  # Symlink main binary
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/lib/${pkgname}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}