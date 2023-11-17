import HomeSvc from '../services/home.service';

class HomeCtrl {
  home = async (req, res) => {
    const result = HomeSvc.home();

    res.render('index.ejs', { result });
  };
}

export default new HomeCtrl();
