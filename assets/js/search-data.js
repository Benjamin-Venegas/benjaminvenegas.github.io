// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-notes",
          title: "Notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/";
          },
        },{id: "news-a-news-article-about-a-research-stay-i-made-at-simon-fraser-university-vancouver-under-the-supervision-of-profs-razvan-fetecau-and-steven-ruuth",
          title: 'A news article about a research stay I made at Simon Fraser University,...',
          description: "",
          section: "News",},{id: "news-i-was-featured-in-this-article-ahead-of-a-2-month-research-stay-i-made-with-my-friend-alonso-to-george-mason-university-fairfax-va-us",
          title: 'I was featured in this article ahead of a 2-month research stay I...',
          description: "",
          section: "News",},{id: "news-i-was-interviewed-for-this-article-here-in-spanish-as-the-result-of-together-with-alonso-taking-on-the-organization-of-sanmoma-a-series-of-numerical-analysis-seminars-supported-by-ci-2-ma-after-years-of-being-on-hold-due-to-the-pandemic",
          title: 'I was interviewed for this article (here in spanish) as the result of—together...',
          description: "",
          section: "News",},{id: "news-the-a-posteriori-article-of-our-visit-to-gmu-fairfax-va",
          title: 'The a posteriori article of our visit to GMU, Fairfax, VA.',
          description: "",
          section: "News",},{id: "news-i-attended-the-cimpa-school-numerical-analysis-of-pdes-in-rosario-amp-amp-buenos-aires-argentina-where-i-also-presented-a-poster-i-was-featured-in-this-article-about-the-school",
          title: 'I attended the CIMPA School: Numerical Analysis of PDEs, in Rosario &amp;amp;amp; Buenos...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%6E%6A%61%6D%69%6E.%76%65%6E%65%67%61%73@%75%63%73%63.%63%6C", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-6803-5784", "_blank");
        },
      },{
        id: 'social-mathscinet',
        title: 'Mathscinet',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Benjamin-Venegas-5/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CsRo6ToAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
