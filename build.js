import fs from 'fs'

let fileHTML = fs.readFileSync("./index.stub", 'utf-8')

const baseURL = "https://4fdal.github.io/ika"

const galeries = fs.readdirSync("./ika/galery")
var htmlGaleries = ""
for (const galery of galeries) {
    htmlGaleries += `
        <a
            class="e-gallery-item elementor-gallery-item elementor-animated-content"
            href="${baseURL}/galery/${galery}"
            data-elementor-open-lightbox="yes"
            data-elementor-lightbox-slideshow="4b117ddd"
            data-elementor-lightbox-title="08-Gallery-08-kekondangan"
            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTQ1NSwidXJsIjoiaHR0cHM6XC9cL2hpLmtla29uZGFuZ2FuLmlkXC93cC1jb250ZW50XC91cGxvYWRzXC9qZXQtZm9ybS1idWlsZGVyXC80YzViZGU3NGE4ZjExMDY1Njg3NDkwMmYwNzM3ODAwOVwvMjAyNFwvMDZcLzA4LUdhbGxlcnktMDgta2Vrb25kYW5nYW4ud2VicCIsInNsaWRlc2hvdyI6IjRiMTE3ZGRkIn0%3D">
                <div
                class="e-gallery-image elementor-gallery-item__image"
                data-thumbnail="${baseURL}/galery/${galery}"
                data-width="1024"
                data-height="768"
                aria-label=""
                role="img"></div>
                <div class="elementor-gallery-item__overlay"></div>
        </a>
    `
}

fileHTML = fileHTML.replaceAll("{{base_url}}", baseURL)
fileHTML = fileHTML.replaceAll("{{galeries}}", htmlGaleries)

fs.writeFileSync("./ika/index.html", fileHTML, 'utf-8')


