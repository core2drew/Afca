var app = angular.module('Afca');

app.controller("GalleryController", function () {
    var galleryCtrl = this;
    var imagePath = '../../images/gallery/students';
    var imagePathAlumni = '../../images/gallery/alumni';

    galleryCtrl.viewFullImageSrc = "";

    galleryCtrl.selectedAlbumImages = {};

    galleryCtrl.currentAlumniModalDetails = {};

    galleryCtrl.elementaryStudents = [
        //Elementary
        {
            'level': 'Preschool',
            'students_image': [
                {
                    'image': imagePath + '/prep/bayot.jpg',
                },
                {
                    'image': imagePath + '/prep/navarro.jpg',
                },
                {
                    'image': imagePath + '/prep/nonato.jpg',
                },
                {
                    'image': imagePath + '/prep/arellano.jpg',
                },
                {
                    'image': imagePath + '/prep/bacierra.jpg',
                },
                {
                    'image': imagePath + '/prep/bajal.jpg',
                },
                {
                    'image': imagePath + '/prep/guzman.jpg',
                },
                {
                    'image': imagePath + '/prep/sakaguchi.jpg',
                },
                {
                    'image': imagePath + '/prep/samala.jpg',
                },
                {
                    'image': imagePath + '/prep/samartino.jpg',
                },
                {
                    'image': imagePath + '/prep/sugatan.jpg',
                }
            ]
        },
        {
            'level': 'Grade 1',
            'students_image': [
                {
                    'image': imagePath + '/grade 1/aguilar.jpg',
                },
                {
                    'image': imagePath + '/grade 1/atienza.jpg',
                },
                {
                    'image': imagePath + '/grade 1/bacierra-cailey.jpg',
                },
                {
                    'image': imagePath + '/grade 1/bacierra-codey.jpg',
                },
                {
                    'image': imagePath + '/grade 1/cruz.jpg',
                },
                {
                    'image': imagePath + '/grade 1/dacanay.jpg',
                },
                {
                    'image': imagePath + '/grade 1/lacuesta.jpg',
                },
                {
                    'image': imagePath + '/grade 1/legaspi.jpg',
                },
                {
                    'image': imagePath + '/grade 1/luma-as.jpg',
                },
                {
                    'image': imagePath + '/grade 1/olaes.jpg',
                },
                {
                    'image': imagePath + '/grade 1/porcioncula.jpg',
                },
                {
                    'image': imagePath + '/grade 1/rabocarsal.jpg',
                },
                {
                    'image': imagePath + '/grade 1/salud.jpg',
                },
                {
                    'image': imagePath + '/grade 1/vanta.jpg',
                },
            ]
        },
        {
            'level': 'Grade 2',
            'students_image': [
                {
                    'image': imagePath + '/grade 2/alejandre.jpg',
                },
                {
                    'image': imagePath + '/grade 2/baquiran.jpg',
                },
                {
                    'image': imagePath + '/grade 2/dandan.jpg',
                },
                {
                    'image': imagePath + '/grade 2/failano.jpg',
                },
                {
                    'image': imagePath + '/grade 2/luna.jpg',
                },
                {
                    'image': imagePath + '/grade 2/morena.jpg',
                },
                {
                    'image': imagePath + '/grade 2/oronos.jpg',
                },
                {
                    'image': imagePath + '/grade 2/ortega.jpg',
                },
                {
                    'image': imagePath + '/grade 2/ponce.jpg',
                },
                {
                    'image': imagePath + '/grade 2/rivero.jpg',
                },
                {
                    'image': imagePath + '/grade 2/ulatan.jpg',
                },
                {
                    'image': imagePath + '/grade 2/valenzuela.jpg',
                },
            ]
        },
        {
            'level': 'Grade 3',
            'students_image': [
                {
                    'image':imagePath + '/grade 3/castronuevo.jpg',
                },
                {
                    'image': imagePath + '/grade 3/javier.jpg',
                },
                {
                    'image': imagePath + '/grade 3/lavides.jpg',
                },
                {
                    'image':imagePath + '/grade 3/merana.jpg',
                },
                {
                    'image': imagePath + '/grade 3/ortega.jpg',
                },
                {
                    'image': imagePath + '/grade 3/roy.jpg',
                },
                {
                    'image': imagePath + '/grade 3/vanta.jpg',
                },
            ]
        },
        {
            'level': 'Grade 4',
            'students_image': [
                {
                    'image': imagePath + '/grade 4/bajal.jpg',
                },
                {
                    'image': imagePath + '/grade 4/famero.jpg',
                },
                {
                    'image': imagePath + '/grade 4/glean.jpg',
                },
                {
                    'image': imagePath + '/grade 4/legaspi.jpg',
                },
                {
                    'image': imagePath + '/grade 4/loto.jpg',
                },
                {
                    'image': imagePath + '/grade 4/dwight.jpg',
                },
                {
                    'image': imagePath + '/grade 4/penaflorida.jpg',
                },
                {
                    'image': imagePath + '/grade 4/suaverdez.jpg',
                },
                {
                    'image': imagePath + '/grade 4/valenzuela.jpg',
                },
            ]
        },
        {
            'level': 'Grade 5',
            'students_image': [
                {
                    'image': imagePath + '/grade 5/alvarez.jpg',
                },
                {
                    'image': imagePath + '/grade 5/argarin.jpg',
                },
                {
                    'image': imagePath + '/grade 5/atangan.jpg',
                },
                {
                    'image': imagePath + '/grade 5/capistrano.jpg',
                },
                {
                    'image': imagePath + '/grade 5/delacruz.jpg',
                },
                {
                    'image': imagePath + '/grade 5/flores.jpg',
                },
                {
                    'image': imagePath + '/grade 5/lunas.jpg',
                },
                {
                    'image': imagePath + '/grade 5/pagtakhan.jpg',
                },
                {
                    'image': imagePath + '/grade 5/ronquillo.jpg',
                },
                {
                    'image': imagePath + '/grade 5/sto domingo.jpg',
                },
                {
                    'image': imagePath + '/grade 5/valenzuela-jan.jpg',
                },
                {
                    'image': imagePath + '/grade 5/valenzuela-zyrell.jpg',
                },
            ]
        },
        {
            'level': 'Grade 6',
            'students_image': [
                {
                    'image': imagePath + '/grade 6/alum.jpg',
                },
                {
                    'image': imagePath + '/grade 6/arquillano.jpg',
                },
                {
                    'image': imagePath + '/grade 6/atienza.jpg',
                },
                {
                    'image': imagePath + '/grade 6/concepcion.jpg',
                },
                {
                    'image': imagePath + '/grade 6/dizon.jpg',
                },
                {
                    'image': imagePath + '/grade 6/dolar.jpg',
                },
                {
                    'image': imagePath + '/grade 6/dondonayos.jpg',
                },
                {
                    'image': imagePath + '/grade 6/javier.jpg',
                },
                {
                    'image': imagePath + '/grade 6/merana.jpg',
                },
                {
                    'image': imagePath + '/grade 6/profeta.jpg',
                },
                {
                    'image': imagePath + '/grade 6/reyes.jpg',
                }
            ]
        },
    ];

    galleryCtrl.highSchoolStudents = [
        //HighSchool
        {
            'level': 'Grade 7',
            'students_image': [
                {
                    'image': imagePath + '/grade 7/atienza.jpg',
                },
                {
                    'image': imagePath + '/grade 7/canovas.jpg',
                },
                {
                    'image': imagePath + '/grade 7/delacruz.jpg',
                },
                {
                    'image': imagePath + '/grade 7/dimaano.jpg',
                },
                {
                    'image': imagePath + '/grade 7/galeon.jpg',
                },
                {
                    'image': imagePath + '/grade 7/galicha.jpg',
                },
                {
                    'image': imagePath + '/grade 7/marquez.jpg',
                },
                {
                    'image': imagePath + '/grade 7/monton.jpg',
                },
                {
                    'image': imagePath + '/grade 7/pineda.jpg',
                },
                {
                    'image': imagePath + '/grade 7/vales.jpg',
                },
            ]
        },
        {
            'level': 'Grade 8',
            'students_image': [
                {
                    'image': imagePath + '/grade 8/aguilar.jpg',
                },
                {
                    'image': imagePath + '/grade 8/balan.jpg',
                },
                {
                    'image': imagePath + '/grade 8/cristino.jpg',
                },
                {
                    'image': imagePath + '/grade 8/dandan.jpg',
                },
                {
                    'image': imagePath + '/grade 8/dolar.jpg',
                },
                {
                    'image': imagePath + '/grade 8/garces.jpg',
                },
                {
                    'image': imagePath + '/grade 8/hererra.jpg',
                },
                {
                    'image': imagePath + '/grade 8/luna.jpg',
                },
                {
                    'image': imagePath + '/grade 8/ridon.jpg',
                },
                {
                    'image': imagePath + '/grade 8/salud.jpg',
                },
                {
                    'image': imagePath + '/grade 8/samartino.jpg',
                },
                {
                    'image': imagePath + '/grade 8/valenzuela.jpg',
                },
            ]
        },
        {
            'level': 'Grade 9',
            'students_image': [
                {
                    'image': imagePath + '/grade 9/delacruz.jpg',
                },
                {
                    'image': imagePath + '/grade 9/pornuevo.jpg',
                },
                {
                    'image': imagePath + '/grade 9/santiago.jpg',
                },
            ]
        },
        {
            'level': 'Grade 10',
            'students_image': [
                {
                    'image': imagePath + '/grade 10/buenviaje-abigail.jpg',
                },
                {
                    'image': imagePath + '/grade 10/buenviaje-marion.jpg',
                },
                {
                    'image': imagePath + '/grade 10/ceredon.jpg',
                },
                {
                    'image': imagePath + '/grade 10/ibanez.jpg',
                },
                {
                    'image': imagePath + '/grade 10/morales.jpg',
                },
                {
                    'image': imagePath + '/grade 10/salud.jpg',
                },
                {
                    'image': imagePath + '/grade 10/valenzuela.jpg',
                },
            ]
        },
    ];

    galleryCtrl.alumniStudents = [
        {
            'year': '2016',
            'students_image': [
                {
                    'name': 'Joshua S. Cristino',
                    'story': '',
                    'image': imagePathAlumni + '/2016/cristino.jpg'
                },
                {
                    'name': 'Jean Paolo L. Del Monte',
                    'story': 'He spent 8 academic years in AFCA. He joined the JSC 4 times and the NSC thrice. He is now taking up Bachelor of Science in Information Technology at University of the East. He wants to become a great software engineer.',
                    'image': imagePathAlumni + '/2016/del monte.jpg'
                },
                {
                    'name': 'Daniel L. Dinglasan',
                    'story': '',
                    'image': imagePathAlumni + '/2016/dinglasan.jpg'
                },
                {
                    'name': 'Ji Yeon Kim',
                    'story': 'She stayed in AFCA for 7 years. She joined the JSC thrice. She is now taking AB-AV Tourism at Philippine State College of Aeronautics. She aims to become a stewardess or an accountant.',
                    'image': imagePathAlumni + '/2016/kim.jpg'
                },
                {
                    'name': 'Hamedeh L. Monfared',
                    'story': 'She spent 4 years in AFCA. She joined the JSC once. She is now studying at Manila Tytana Colleges. She wants to become a nurse someday.',
                    'image': imagePathAlumni + '/2016/monfared.jpg'
                },
                {
                    'name': 'Rogel Andrei M. Pagtakhan',
                    'story': 'He spent a year in AFCA. He is now taking a course in Associate in Aviation Electronics Technology at Philippine State College of Aeronautics. He wants to become pilot and be a model Christian for others.',
                    'image': imagePathAlumni + '/2016/pagtakhan.jpg'
                },
                {
                    'name': 'Ben Abraham Q. Perillo',
                    'story': 'He stayed for 13 years in AFCA. He joined the JSC 4 times and the NSC thrice. He is now taking up Bachelor of Science in Business Administration major in Management at University of Asia and the Pacific. He wants to become a businessman.',
                    'image': imagePathAlumni + '/2016/perillo.jpg'
                },
                {
                    'name': 'Piolo S. Reyes',
                    'story': '',
                    'image': imagePathAlumni + '/2016/reyes.jpg'
                },
                {
                    'name': 'Erika A. Tacda',
                    'story': 'She stayed in AFCA for 5 years. She joined the JSC twice and the NSC once. She desires to be successful in life by means of hard work, determination and faithfulness to the Lord.',
                    'image': imagePathAlumni + '/2016/tacda.jpg'
                }
            ]
        },
        {
            'year': '2015',
            'students_image': [
                {
                    'name': 'Ernest Joshua M. Casten',
                    'story': 'He spent 7 years in AFCA. He joined the NSC thrice. He is now studying at Philippine State College of Aeronautics and taking up Associate in Aircraft Maintenance Technology course. He would like to give all his best in every plan and task that he have.',
                    'image': imagePathAlumni + '/2015/casten.jpg'

                },
                {
                    'name': 'Yeshua A. Dimaano',
                    'story': '',
                    'image': imagePathAlumni + '/2015/dimaano.jpg'
                },
                {
                    'name': 'Edrianne L. Ibiaz',
                    'story': 'She stayed in AFCA for 3 years. She joined the NSC twice. She is now studying at International School of Hotel and Restaurant Management with the course of Bachelor in Science in Tourism Management. She aims to be a flight attendant someday.',
                    'image': imagePathAlumni + '/2015/ibiaz.jpg'
                },
                {
                    'name': 'Raziyeh L. Monfared',
                    'story': '',
                    'image': imagePathAlumni + '/2015/monfared.jpg'
                },
                {
                    'name': 'Ghieter D. Oracion',
                    'story': 'He stayed in AFCA for 10 years. He joined the JSC twice. He is now taking up the course of Bachelor in Science in Marine Engineering at University of Perpetual Help. He desires to be a chief engineer.',
                    'image': imagePathAlumni + '/2015/oracion.jpg'
                },
                {
                    'name': 'Hannah Aarone M. Poblete',
                    'story': 'She spent 8 years in AFCA. She joined both the JSC and NSC thrice. She is now studying at Philippine State College of Aeronautics and taking up the course Associate in Aircraft Maintenance Technology. She wants to be an efficient aircraft mechanic.',
                    'image': imagePathAlumni + '/2015/poblete.jpg'
                },
                {
                    'name': 'Keil Deinniel S. Reyes',
                    'story': 'He stayed in AFCA for 4 years. He joined both the JSC and NSC once. He is now taking up Aviation Information Technology at Philippine State College of Aeronautics. He wants to be a successful man and diligent servant of God. He also desires to see the Aurora Borealis.',
                    'image': imagePathAlumni + '/2015/reyes.jpg'
                },
                {
                    'name': 'Demivalerie Yuri R. Sin',
                    'story': 'She spent 12 academic years in AFCA. She joined the JSC 5 times and joined the NSC twice. She is now studying at De La Salle University- Dasmarinas and taking up the course Bachelor of Arts in Psychology, for she aims to be a psychologist.',
                    'image': imagePathAlumni + '/2015/sin.jpg'
                },
                {
                    'name': 'Ma. Madonna A. Tacda',
                    'story': 'She spent 4 years in AFCA. She joined the JSC once and joined the NSC twice. She desires to be an Ob- Gyne.',
                    'image': imagePathAlumni + '/2015/tacda.jpg'
                }
            ]
        },
        {
            'year': '2014',
            'students_image': [
                {
                    'name': 'Michael M. Chan',
                    'story': '',
                    'image': imagePathAlumni + '/2014/chan.jpg'
                },
                {
                    'name': 'Jeddy May N. Pineda',
                    'story': 'She stayed in AFCA for 4 years. She joined the NSC once. She is now studying at International School of Hotel and Restaurant Management with the course of Bachelor of Science in Business Administration Major in Hotel and Restaurant Management. She aims to be a human resource manager someday.',
                    'image': imagePathAlumni + '/2014/pineda.jpg'
                },
                {
                    'name': 'Airon Brix D. Simeon',
                    'story': 'He spent 4 years in AFCA. He joined the NSC twice. He is now studying Culinary arts at Lyceum of the Philippines University. He desires to become a successful chef.',
                    'image': imagePathAlumni + '/2014/simeon.jpg'
                },
            ]
        },
        {
            'year': '2013',
            'students_image': [
                {
                    'name': 'Ma. Alexandria De Guzman',
                    'story': 'She spent 5 years in AFCA.  She now studies at Polytechnic University of the Philippines- San Juan Campus and taking up Bachelor of Science in Accountancy. She wants to become a certified public accountant.',
                    'image': imagePathAlumni + '/2013/de guzman.jpg'
                },
                {
                    'name': 'Juan Miguel L. Del Monte',
                    'story': 'He has spent 5 years in AFCA. He joined both JSC and NSC twice. He is now studying at University of the East- Manila and taking up BSEMCG. HE wants to excel in a program that he took and be proud of what God has given him.',
                    'image': imagePathAlumni + '/2013/del monte.jpg'
                },
                {
                    'name': 'Timmy Gladys R. Garcia',
                    'story': 'She has spent 7 years in AFCA. She joined the JSC once. SHE joined the NSC thrice. She will be studying at University of Wollonggong in Dubai and will be taking up the course Bachelor of Commerce in Marketing. She is aiming to get a high position in the marketing world and she also wants to travel the world.',
                    'image': imagePathAlumni + '/2013/garcia.jpg'
                },
                {
                    'name': 'Julie Anne A. Ridon',
                    'story': 'She stayed in AFCA for 11 years. She joined the JSC once and the NSC thrice. She is now studying at Lyceum of the Philippines University and taking up Bachelor of Science in Information Technology. She desires to become a professor in programming and to have her own company someday.',
                    'image': imagePathAlumni + '/2013/ridon.jpg'
                },
                {
                    'name': 'Ayen Jocelle D. Simeon',
                    'story': 'She stayed in AFCA for 5 years. She joined the NSC once. She aims to become a RRD.',
                    'image': imagePathAlumni + '/2013/simeon.jpg'
                },
                {
                    'name': 'Raymond Carl A. Tacda',
                    'story': '',
                    'image': imagePathAlumni + '/2013/tacda.jpg'
                },
                {
                    'name': 'Tomohiko M. Ebihara',
                    'story': '',
                    'image': imagePathAlumni + '/2013/tomo.jpg'
                },
            ]
        },
        {
            'year': '2012',
            'students_image': [
                {
                    'name': 'Marichel Diaz',
                    'story': '',
                    'image': imagePathAlumni + '/2012/diaz.jpg'
                },
                {
                    'name': 'Camille Rose R. Garcia',
                    'story': 'She spent 7 years in AFCA. She joined the NSC twice. She studied in Westford School of Management for she strives to become an entrepreneur or businesswoman someday.',
                    'image': imagePathAlumni + '/2012/garcia.jpg'
                },
                {
                    'name': 'Angela Grace Q. Perillo',
                    'story': 'She Perillo has spent 12 years in AFCA. She joined the JSC twice and the NSC thrice. She aims to become a successful musician.',
                    'image': imagePathAlumni + '/2012/perillo.jpg'
                },
                {
                    'name': 'Hoshea Aleeza M. Poblete',
                    'story': 'She stayed in AFCA for 5 years. She joined JSC for 4 years and she joined the NSC thrice. She studies at the University of the Philippines with the course of Bachelor of Arts in Social Sciences Major in Area Studies. Her desire is to become successful where it matters most.',
                    'image': imagePathAlumni + '/2012/poblete.jpg'
                },
            ]
        },
        {
            'year': '2011',
            'students_image': [
                {
                    'name': 'Daisylyn C. Quinto',
                    'story': 'She stayed in AFCA for 5 years. She joined the NSC thrice.',
                    'image': imagePathAlumni + '/2011/quinto.jpg'
                },
                {
                    'name': 'Ron Junnele D. Simeon',
                    'story': 'He has stayed in AFCA for  5 years. He studied in INC School for Ministers for he desires to become a Minister himself.',
                    'image': imagePathAlumni + '/2011/simeon.jpg'
                },
                {
                    'name': 'John Paul Joshua S. Trajano',
                    'story': '',
                    'image': imagePathAlumni + '/2011/trajano.jpg'
                }
            ]
        },
        {
            'year': '2010',
            'students_image': [
                {
                    'name': 'Camille AJ L. Butawan',
                    'story': '',
                    'image': imagePathAlumni + '/2010/butawan.jpg'
                },
                {
                    'name': 'Maricar S. Cristino',
                    'story': 'She stayed in AFCA for 10 years. She joined the NSC twice. She studied at Lyceum of the Philippines University- Cavite and took up Bachelor of Science in Foreign Service. She then travelled abroad and studied at New Zealand Institute Education and took up a course in International Marketing. She desires to be able to write a book with her old professor.',
                    'image': imagePathAlumni + '/2010/cristino.jpg'
                },
                {
                    'name': 'Mychal Anthony L. Del Monte',
                    'story': 'He spent 3 years in AFCA. He joined the JSC twice as well as the NSC. He studied at Adamson University and took up Bachelor of Science in Information Technology.  He desires to be a database administrator.',
                    'image': imagePathAlumni + '/2010/del monte.jpg'
                },
                {
                    'name': 'Joana Micca Q. Perillo',
                    'story': 'She stayed in AFCA for 9 years. She joined the NSC twice. She studied at De La Salle University- Manila and took up the course Bachelor of Science in Entrepreneurship. Her ambition is to own a hotel and a resort.',
                    'image': imagePathAlumni + '/2010/perillo.jpg'
                },
                {
                    'name': 'Rabin Gio T. Reyes',
                    'story': 'He spent 5 years in AFCA. He joined the NSC twice. He strives to become a successful businessman.',
                    'image': imagePathAlumni + '/2010/reyes.jpg'
                },
                {
                    'name': 'Charlene A. Tacda',
                    'story': 'She spent 4 years in AFCA. She joined the NSC twice. She desires to travel the world.',
                    'image': imagePathAlumni + '/2010/tacda.jpg'
                }
            ]
        },
        {
            'year': '2009',
            'students_image': [
                {
                    'name': 'Gen Mitchell B. Esguerra',
                    'story': '',
                    'image': imagePathAlumni + '/2009/esguerra.jpg'
                },
                {
                    'name': 'Renzl Kirk Patrick N. Oruga',
                    'story': '',
                    'image': imagePathAlumni + '/2009/oruga.jpg'
                },
                {
                    'name': 'Nikki Merla Q. Perillo',
                    'story': 'She stayed in AFCA for 10 years. She joined the NSC once.',
                    'image': imagePathAlumni + '/2009/perillo.jpg'
                },
            ]
        },
        {
            'year': '2008',
            'students_image': [
                {
                    'name': 'John Caspar B. Esguerra',
                    'story': '',
                    'image': imagePathAlumni + '/2008/esguerra.jpg'
                },
                {
                    'name': 'Bryan Adams A. Layosa',
                    'story': '',
                    'image': imagePathAlumni + '/2008/layosa.jpg'
                },
            ]
        }
    ];

    galleryCtrl.activityAlbums = [
        {
            'title':'Buwan ng Wika',
            'path':'../../images/gallery/school-activities/buwan ng wika/',
            'cover':'',
            'slug':'buwan-ng-wika',
            'images':[
                'IMG20160826084959.jpg',
                'IMG20160826085006.jpg',
                'IMG20160826085009.jpg',
                'IMG20160826085016.jpg',
                'IMG20160826085019.jpg',
                'IMG20160826085022.jpg',
                'IMG20160826085026.jpg',
                'IMG20160826090847.jpg',
                'IMG20160826090851.jpg',
                'IMG20160826090854.jpg',
                'IMG20160826102638.jpg',
                'IMG20160826102705.jpg',
                'IMG20160826102708.jpg',
                'IMG20160826102714.jpg',
                'IMG20160826102935.jpg',
                'IMG20160826102959.jpg',
                'IMG20160826103046.jpg',
                'IMG20160826103052.jpg',
                'IMG20160826103053.jpg',
                'IMG20160826103055.jpg',
                'IMG20160826103139.jpg',
                'IMG20160826105026.jpg',
                'IMG20160826105029.jpg',
                'IMG20160826105031.jpg',
                'IMG20160826105118.jpg',
                'IMG20160826105227.jpg',
                'IMG20160826105321.jpg',
                'IMG20160826105457.jpg',
                'IMG20160826105607.jpg',
                'IMG20160826121048.jpg',
                'P_20160826_090941.jpg',
                'P_20160826_090946.jpg',
                'P_20160826_091019.jpg',
                'P_20160826_091034.jpg'
            ]
        },
        {
            'title':'Deworming',
            'path':'../../images/gallery/school-activities/deworming/',
            'cover':'',
            'slug':'deworming',
            'images':[
                '14151763_1207562402598394_99497048_o.jpg',
                '14151993_1207564652598169_1754634924_o.jpg',
                '14151997_1207562459265055_1406532605_o.jpg',
                '14163774_1207562802598354_1917673114_o.jpg',
                '14191525_1207566092598025_1552634834_o.jpg',
                '14191619_1207564615931506_1073811095_o.jpg',
                '14191735_1207563395931628_2123426030_o.jpg',
                '14191870_1207563295931638_411447365_o.jpg',
                '14202789_1207563785931589_359997684_o.jpg',
                '14203000_1207565535931414_1523433537_o.jpg',
                '14215384_1207564822598152_1504660257_o.jpg',
                '14215761_1207562865931681_465326463_o.jpg',
                '14215761_1207564299264871_1308747480_o.jpg'
            ]
        },
        {
            'title':'Fire Drill',
            'path':'../../images/gallery/school-activities/fire drill/',
            'cover':'',
            'slug':'fire-drill',
            'images':[
                'IMG20160812143105.jpg',
                'IMG20160812143107.jpg',
                'IMG20160812143110.jpg',
                'IMG20160812143144.jpg',
                'IMG20160812143147.jpg',
                'IMG20160812144322.jpg',
                'IMG20160812144334.jpg',
                'IMG20160812144338.jpg',
                'IMG20160812144341.jpg',
                'IMG20160812144343.jpg',
                'IMG20160812144346.jpg'
            ]
        },
        {
            'title':'Honor Roll Field Trip Preschool And Primary',
            'path':'../../images/gallery/school-activities/honor roll field trip preschool primary/',
            'cover':'',
            'slug':'honor-roll-field-trip-primary',
            'images':[
                '14064174_1207321722622462_1060303136709658758_n.jpg',
                '14088682_1207321879289113_8148051823997732248_n.jpg',
                '14089157_1207322599289041_733458669123281980_n.jpg',
                '14095719_1207324992622135_1480540569794310301_n.jpg',
                '14095742_1207322142622420_1628992459870173637_n.jpg',
                '14095883_1207325045955463_3051886647381604654_n.jpg',
                '14100331_1207321669289134_5999470261616266141_n.jpg',
                '14102379_1207324802622154_3349116282822263744_n.jpg',
                '14102532_1207324422622192_7166332966546964062_n.jpg',
                '14141978_1207321459289155_2905520886884700464_n.jpg',
                '14183764_1207321785955789_8608404963573599459_n.jpg',
                '14184485_1207324602622174_9000822166290915967_n.jpg',
                '14191964_1207321535955814_6733714885198014311_n.jpg',
                '14199167_1207321579289143_2207768566397494389_n.jpg',
                '14199312_1207322022622432_115510569871933186_n.jpg',
                '14199614_1207321829289118_2049685913850866505_n.jpg',
                '14203242_1207321972622437_1046875198149506499_n.jpg',
                '14212015_1207321929289108_3275541715102751671_n.jpg',
                '14212593_1207325145955453_6089448343754065945_n.jpg',
                '14212654_1207324762622158_7245726445757106203_n.jpg',
                '14117814_1207322805955687_543172081744149013_n.jpg',
                '14192745_1207322345955733_3061304340198819347_n.jpg',
                '14199682_1207322469289054_5491383436953317730_n.jpg',
                '14199687_1207322189289082_7590101863064620596_n.jpg',
                '14212193_1207322399289061_4702250723601926504_n.jpg'
            ]
        },
        {
            'title':'Honor Roll Field Trip Intermediate and High School',
            'path':'../../images/gallery/school-activities/honor roll field trip inter hs/',
            'cover':'',
            'slug':'honor-roll-field-trip-highschool',
            'images':[
                '14141498_1210313378991819_7956099988848236273_n.jpg',
                '14141898_1210314168991740_7737314758384317480_n.jpg',
                '14183709_1210313265658497_7404870683055591658_n.jpg',
                '14183749_1210316632324827_2906841213722001665_n.jpg',
                '14192133_1210318085658015_3476957278333910083_n.jpg',
                '14192769_1210315142324976_1255241252724230904_n.jpg',
                '14199576_1210319455657878_4680929768141782298_n.jpg',
                '14199648_1210316505658173_8698064422109100033_n.jpg',
                '14199744_1210312648991892_8914900118526298613_n.jpg',
                '14202656_1210321195657704_7432018114634237388_n.jpg',
                '14202673_1210316718991485_6603244804294445467_n.jpg',
                '14212589_1210313568991800_6418549286711738439_n.jpg',
                '14222091_1210317858991371_4719464935562929863_n.jpg',
                '14222351_1210317925658031_407265158972859171_n.jpg',
                '14222369_1210319562324534_2170902337907683084_n.jpg',
                '14225358_1210316818991475_3759844924054476088_n.jpg',
                '14232393_1210313148991842_5422061637183853072_n.jpg',
                '14232450_1210312442325246_8730535238482052068_n.jpg',
                '14232486_1210314788991678_6176691725798867744_n.jpg',
                '14232526_1210314992324991_1440525949831464420_n.jpg',
                '14233003_1210318742324616_5930750606727402352_n.jpg',
                '14233003_1210319678991189_4335839703748720186_n.jpg',
                '14237567_1210316588991498_7682381694114514737_n.jpg',
                '14237721_1210313202325170_3331683527089636395_n.jpg',
                '14238170_1210316868991470_7378927633140498572_n.jpg',
                '14238184_1210318788991278_4079179730007687243_n.jpg',
                '14238349_1210314942324996_5134817907943240165_n.jpg',
                '14238357_1210313122325178_1132081521671381482_n.jpg',
            ]
        },
        {
            'title':'Youth Summit',
            'path':'../../images/gallery/school-activities/youth summit/',
            'cover':'',
            'slug':'youth-summit',
            'images':[
                '14045920_1205288676160956_6956736024148991255_n.jpg',
                '14080018_1205289206160903_9175220238504633366_n.jpg',
                '14102182_1205288812827609_94967046019981223_n.jpg',
                '14102493_1205288772827613_4922990637464405974_n.jpg',
                '14117975_1205289372827553_6900071968671362122_n.jpg',
                '14184433_1205288572827633_8948823970493473316_n.jpg',
                '14192737_1205288912827599_4041899675538650685_n.jpg',
                '14199174_1205289339494223_7834368955763028552_n.jpg',
                '14199739_1205289129494244_8196334594098113930_n.jpg',
                '14202537_1205289059494251_1847636369523791270_n.jpg'
            ]
        }
    ];

    galleryCtrl.JSCVideos = [
        {
            "embed":"https://www.youtube.com/embed/Y1h8jrWK-FQ",
            "placeholder":"/images/placeholder.png"
        },
        {
            "embed":"https://www.youtube.com/embed/E_cZUsQfLkE",
            "placeholder":"/images/placeholder.png"
        }
    ];

    galleryCtrl.NSCVideos = [];



    galleryCtrl.albumImageRandomizer = function () {
        angular.forEach(galleryCtrl.activityAlbums, function(key,id){
            var index = Math.floor((Math.random() * key.images.length) + 0);
            key.cover = key.images[index];
            console.log(key.cover);
        });
    }

    galleryCtrl.selectedAlbum = function (album)
    {
        angular.forEach(galleryCtrl.activityAlbums, function(key,id){
           if(album === key.slug)
           {
               galleryCtrl.selectedAlbumImages = galleryCtrl.activityAlbums[id];
           }
        });
    }

    galleryCtrl.showAlumniDetails = function (details) {
        var story = details.story.trim();
        if (story) {
            galleryCtrl.currentAlumniModalDetails = details;
            $('#AlumniDetailsModal').modal({blurring: true}).modal('show');
        }
    }

    galleryCtrl.viewFullImage = function (index) {
        $('#AlbumModal').modal('refresh');
        var path = galleryCtrl.selectedAlbumImages.path;
        var image = galleryCtrl.selectedAlbumImages.images[index];
        galleryCtrl.viewFullImageSrc = path + image;

        $('#AlbumModal').modal({blurring: true, observeChanges: true}).modal({
            onVisible: function () {
                $("#AlbumModal").modal("refresh");
            }
        }).modal("show");
    }
});