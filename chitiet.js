  // ======= GỌI DỮ LIỆU PHIM ========
  const films = {
    "themeg": {
      title: "The Meg",
      poster: "postertc1.webp",
      description: "Giữa thế giới bí ẩn dưới đại dương, nơi ẩn chứa muôn vàn hiểm nguy. Một chuyên gia lặn tài ba được giao nhiệm vụ giải cứu các thành viên của chương trình thám hiểm đáy biển quốc tế khỏi hiểm họa kinh hoàng: một con cá mập khổng lồ dài 22 mét.",
      genre: "Hành động, Kinh dị",
      episodes: "1 (Phim lẻ)",
      duration: "1h 53m",
      director: { name: "Winston Chao", photo: "dd1.webp" },
      actors: [
        { name: "Jason Statham", photo: "dv1.webp" },
        { name: "Li Bingbing", photo: "dv2.webp" },
        { name: "Rainn Wilson", photo: "dv3.webp" },
        { name: "Cliff Curtis", photo: "dv4.webp" },
        { name: "Ruby Rose", photo: "dv5.webp" }
      ]
    },
    "harrypotter": {
      title: "Harry Potter và Hòn Đá Phù Thủy",
      poster: "chitietcchu2.webp",
      description: "Harry Potter, một cậu bé bình thường, bất ngờ được đưa đến Trường Phù thủy và Pháp sư Hogwarts, nơi cậu bắt đầu hành trình phi thường khám phá thế giới phép thuật. Tại đây, Harry phải học cách sử dụng phép thuật, kết bạn mới và đối mặt với những kẻ thù nguy hiểm, đồng thời nhận ra rằng thế giới phù thủy không hề đơn giản như cậu tưởng tượng.",
      genre: "Phiêu lưu, Giả tưởng, Phép thuật",
      episodes: "1 (Phim lẻ))",
      duration: "2h 32m",
      director: { name: "Tom Nowicki", photo: "d.webp" },
      actors: [
        { name: "Daniel Radcliffe", photo: "anhnen1.webp" },
        { name: "Rupert Grint", photo: "anhnen2.webp" },
        { name: "Emma Watson", photo: "anhnen3.webp" },
        { name: "Richard Harris", photo: "anhnen4.webp" },
        { name: "Tom Felton", photo: "anhnen5.webp" },
      ]
    },

  "thelittle": {
      title: "The Little Mermaid",
      poster: "so3.webp",
      description: " Câu chuyện lấy bối cảnh một rạp xiếc tại Missisippi, tại đó có ông chủ đầy bí hiểm đang giam giữ một mỹ nhân ngư. Sự xuất hiện của Cam - anh chàng phóng viên điển trai cùng cô em họ đã thay đổi mọi chuyện. Liệu nàng tiên cá nhỏ có chịu mở lòng, và họ có vượt qua những thử thách trước mắt để được tự do?",
      genre: "Phiêu lưu, Lãng mạn, Gia đình",
      episodes: "1 (Phim lẻ))",
      duration: "1h 38m",
      director: { name: "Lexy Kolker", photo: "d1.webp" },
      actors: [
        { name: "Poppy Drayton", photo: "m1.webp" },
        { name: "Shirley MacLaine", photo: "m2.webp" },
        { name: "Loreto Peralta", photo: "m3.webp" },
        { name: "William Moseley", photo: "m4.webp" },
        { name: "Gina Gershon", photo: "m5.webp" },
      ]
    },
    "nguoikhoilua": {
      title: "Người Khởi Lửa",
      poster: "tchu5,.webp",
      description: " Charlie McGee, một cô bé có năng lực siêu nhiên đặc biệt – cô có thể tạo ra và điều khiển lửa chỉ bằng ý nghĩ. Từ khi còn nhỏ, Charlie đã phải sống trong sự che giấu và lo sợ, vì chính phủ và các tổ chức bí mật luôn tìm cách truy lùng để khai thác sức mạnh của cô như một vũ khí sinh học nguy hiểm.",
      genre: "Phiêu lưu, Lãng mạn, Gia đình",
      episodes: "1 (Phim lẻ)",
      duration: "2h 40m",
      director: { name: "Shanna Collins", photo: "m4.webp" },
      actors: [
        { name: "Richard Harris", photo: "anhnen4.webp" },
        { name: "Cliff Curtis", photo: "m2.webp" },
        { name: "Loreto Peralta", photo: "m3.webp" },
        { name: "William Moseley", photo: "anhnen5.webp" },
        { name: "Jason Statham", photo: "dv5.webp" },
      ]
    },
    "venom": {
      title: "Venom",
      poster: "tchu1,.webp",
      description: " Anh phóng viên đầy nhiệt huyết Eddie Brock đang trong quá trình điều tra sự thật đen tối ẩn sau vỏ bọc hào nhoáng của tập đoàn công nghệ khổng lồ Life Foundation. Trong quá trình điều tra, anh vô tình tiếp xúc với một loài ký sinh có hình thù quái dị ngoài hành tinh tấn công. Sinh vật này nhanh chóng xâm nhập cơ thể Eddie, tạo nên mối liên kết cộng sinh kỳ lạ nhưng cũng đầy nguy hiểm. Eddie buộc phải tìm cách hòa hợp với nó và dần trở thành Venom. Anh dần nhận ra rằng Venom không chỉ là một ký sinh trùng, mà còn là một người bạn đồng hành, một phần của chính mình.",
      genre: "Chiếu rạp, Khoa học,Phiêu lưu",
      episodes: "1 (Phim lẻ))",
      duration: "2h 23m",
      director: { name: "Mari Wilson,", photo: "anhnen4.webp" },
      actors: [
        { name: "Tom Hardy", photo: "dv11.webp" },
        { name: "Michelle Williams", photo: "h.webp" },
        { name: "Riz Ahmed", photo: "dv12.webp" },
        { name: "William Moseley", photo: "dv13.webp" },
        { name: "Jason Statham", photo: "dv14.webp" },
      ]
    },
    //theloai hanhdong
    "topgun": {
      title: "Phi Công Siêu Đẳng",
      poster: "m.webp",
      description: "Tom Cruise vào vai một phi công tài ba phải vật lộn để cân bằng cuộc sống, trách nhiệm và tình cảm trong lúc đua tranh tại trường huấn luyện máy bay chiến đấu Hải Quân.",
      genre: "Hình sự, Khoa học,Phiêu lưu",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "John Stockwell", photo: "g1.webp" },
      actors: [
        { name: "Tom Cruise", photo: "g2.webp" },
        { name: "Kelly McGillis", photo: "g3.webp" },
        { name: "Val Kilmer", photo: "g4.webp" },
        { name: "Anthony Edwards", photo: "g5.webp" },
        
      ]
    },
    "thebatman": {
      title: "Batman: Vạch Trần Sự Thật",
      poster: "k11.webp",
      description: "Bị chấn động bởi hành vi tàn ác của tên sát nhân hàng loạt nhắm vào các nhân vật chính trị Gotham, Người Dơi buộc phải dấn thân vào cuộc điều tra, lật mặt kẻ thủ ác và vạch trần sự thối nát ẩn sau vẻ ngoài hào nhoáng của thành phố.",
      episodes: "1 (Phim lẻ)",
      duration: "2h 57m",
      director: { name: "Toby Hefferman", photo: "k15.webp" },
      actors: [
        { name: "Robert Pattinson", photo: "k12.webp" },
        { name: "Zoë Kravitz", photo: "k13.webp" },
        { name: "Jeffrey Wright", photo: "k14.webp" },
        { name: "Anthony Edwards", photo: "k16.webp" },
        { name: "Paul Dano", photo: "g5.webp" },
      ]
    },
    "dominion": {
      title: "Thế Giới Khủng Long: Lãnh Địa",
      poster: "k20.webp",
      description: "Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới. Owen Grady may mắn gặp lại cô khủng long mà anh và khán giả vô cùng yêu mến - Blue.",
      genre: "Hình động, Khoa học,Phiêu lưu",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Sam Neill", photo: "m1.webp" },
      actors: [
        { name: "Laura Dern", photo: "anhnen2.webp" },
        { name: "Chris Pratt", photo: "anhnen3.webp" },
        { name: "DeWanda Wise", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "m5.webp" },
        
      ]
    },
    "run": {
      title: "Trốn Chạy",
      poster: "hdong4,.webp",
      description: "Tuyệt tác từ đội ngũ biên kịch, sản xuất & đạo diễn của SEARCHING. Liệt nửa người và mắc phải nhiều chứng bệnh mãn tính từ lúc lọt lòng, cuộc sống của Chloe đến tận năm 17 tuổi chỉ xoay quanh mẹ mình Diane và gần như bị cô lập với thế giới bên ngoài. Đến khi phát hiện ra bí mật khủng khiếp mẹ đang cố gắng che giấu, Chloe biết mình cần phải trốn chạy khỏi cái lồng vô hình đã giam giữ bản thân bấy lâu nay.",
      genre: "Hình sự, Khoa học,Phiêu lưu",
      episodes: "1 (Phim lẻ))",
      duration: "1h 50m",
      director: { name: "John Stockwell", photo: "anhnen3.webp" },
      actors: [
        { name: "Erik Athavale", photo: "h.webp" },
        { name: "Pat Healy", photo: "g3.webp" },
        { name: "Val Kilmer", photo: "g4.webp" },
        { name: "Onalee Ames", photo: "dv1.webp" },
        
      ]
    },
    "thedark": {
      title: "Phi Công Siêu Đẳng",
      poster: "hdong5,.webp",
      description: "The Dark Knight là phần thứ hai trong loạt phim The Dark Knight Trilogy của đạo diễn Christopher Nolan, và được xem là một trong những bộ phim siêu anh hùng vĩ đại nhất mọi thời đại. Phim không chỉ đơn thuần kể về cuộc chiến giữa thiện và ác, mà còn khai thác sâu sắc những xung đột nội tâm, đạo đức và cái giá của công lý.",
      genre: "Chính Kịch, Gay Cấn,Kinh Dị",
      episodes: "1 (Phim lẻ)",
      duration: "1h 29m",
      director: { name: "Douglas Mitchell", photo: "g1.webp" },
      actors: [
        { name: "Tom Cruise", photo: "g2.webp" },
        { name: "Kelly McGillis", photo: "g3.webp" },
        { name: "Val Kilmer", photo: "g4.webp" },
        { name: "Anthony Edwards", photo: "g5.webp" },
        
      ]
    },
    "squad": {
      title: "Điệp Vụ Cảm Tử",
      poster: "hdong6,.webp",
      description: "Như một đội quân tử thần, biệt đội X cùng siêu phản diện Harley Quinn, Bloodsport, Peacemaker dấn thân vào hòn đảo chết chóc Corto Maltese. Nơi nguy hiểm rình rập ở mọi ngóc ngách, súng ống đầy rẫy và kẻ thù ẩn nấp khắp nơi.",
      genre: "Hình sự, Khoa học,Phiêu lưu",
      episodes: "1 (Phim lẻ))",
      duration: "1h 50m",
      director: { name: "John Stockwell", photo: "m1.webp" },
      actors: [
        { name: "Guy Norris", photo: "k12.webp" },
        { name: "John Cena", photo: "k13.webp" },
        { name: "Viola Davisr", photo: "k14.webp" },
        { name: "Anthony Edwards", photo: "m5.webp" },
        
      ]
    },
    
    "mission": {
      title: "Mission: Impossible",
      poster: "hdong8,.webp",
      description: "Cuộc đời là tất thảy những lựa chọn. Tom Cruise thủ vai Ethan Hunt trở lại trong Nhiệm Vụ: Bất Khả Thi – Nghiệp Báo Cuối Cùng.",
      genre: "Hành động, Khoa học,Phiêu lưu",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "anhnen2.webp" },
        { name: "John Cena", photo: "m3.webp" },
        { name: "Simon Pegg", photo: "dv4.webp" },
        { name: "Anthony Edwards", photo: "m5.webp" },
        
      ]
    },
    //theloaitinhcam

     "tc1": {
      title: "Me Before You",
      poster: "tcam1,.jpeg",
      description: "Bộ phim chuyển thể từ tiểu thuyết cùng tên, kể về câu chuyện tình yêu đầy cảm xúc giữa Will, một tỷ phú liệt nửa người và Louisa, một cô gái trẻ khốn khó nhưng đầy nghị lực. âu chuyện của Will và Louisa sẽ khiến bạn tin rằng tình yêu có thể thay đổi mọi thứ. Liệu tình yêu của họ có đủ mạnh mẽ để vượt qua mọi khó khăn và mang lại một kết thúc có hậu?",
      genre: "Chính Kịch, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: " Sue Field", photo: "tt1.webp" },
      actors: [
        { name: "Emilia Clarke", photo: "tt2.webp" },
        { name: "John Cena", photo: "tt3.webp" },
        { name: "Janet McTeer", photo: "tt4.webp" },
        { name: "Anthony Edwards", photo: "tt5.webp" },
        
      ]
    },
     "tc2": {
      title: "Titanic",
      poster: "tcam2,.jpeg",
      description: "Rose DeWitt Bukater, 101 tuổi, hồi nhớ về khoảng thời gian của bà trên tàu Titanic vào 84 năm trước . Khi bà còn là một cô gái trẻ lên tàu Titanic cùng mẹ và chồng sắp cưới. Định mệnh cho cô gặp Jack Dawson, một chàng họa sĩ trẻ tài năng. Rose kể toàn bộ câu chuyện của họ trên chuyến hành trình định mệnh đầu tiên và cuối cùng của Titanic vào ngày 15 tháng 4 năm 1912.",
      genre: "Chính Kịch, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Kate Winslet", photo: "anhnen1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "anhnen2.webp" },
        { name: "John Cena", photo: "m5.webp" },
        { name: "Jenna Coleman", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    }, "tc3": {
      title: "Shakespeare In Love",
      poster: "tcam3,.webp",
      description: "Bộ phim lãng mạn – hài hước xen lẫn yếu tố lịch sử, xoay quanh câu chuyện tình đầy cảm hứng giữa William Shakespeare – nhà soạn kịch vĩ đại của nước Anh, và một người phụ nữ quý tộc tên Viola de Lesseps, người đã thay đổi cuộc đời ông mãi mãi.",
      genre: "Chính Kịch, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "dv1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "dv2.webp" },
        { name: "John Cena", photo: "dv3.webp" },
        { name: "Simon Pegg", photo: "dv4.webp" },
        { name: "Anthony Edwards", photo: "dv14.webp" },
        
      ]
    }, "tc4": {
      title: "La La Land",
      poster: "tcam4,.webp",
      description: "La La Land là câu chuyện tình yêu tuyệt đẹp thời hiện đại giữa chàng nhạc công piano tài hoa chuyên diễn tại các quán bar Sebastian và cô diễn viên mới nổi xinh đẹp Mia Dolan. Thế nhưng, ở thiên đường điện ảnh Hollywood, tình yêu và sự thành công dường như không thể song hành. Khi thành công và sự nổi tiếng đến, họ sẽ phải đối mặt ra sao ...",
      genre: "Chính Kịch, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "dv4.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "tc5": {
      title: "Chúng Ta Của Sau Này",
      poster: "tcam6,.webp",
      description: "Lâm Kiến Thanh và Phương Tiểu Hiểu, hai con người trẻ tuổi gặp nhau lần đầu trên chuyến tàu về quê ăn Tết. Họ đều mang trong mình những ước mơ lớn lao giữa chốn đô thị Bắc Kinh phồn hoa, nhưng cuộc sống lại không hề dễ dàng. Họ cùng nhau chia sẻ những buồn vui, sống cùng nhau, yêu nhau, rồi… xa nhau. Tình yêu của họ không chết, nhưng đã bị đánh bại bởi hiện thực, tham vọng, lòng tự tôn và sự thiếu trưởng thành.",
      genre: "Chính Kịch, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m2.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "dv4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "tc6": {
      title: "Đã đến lúc",
      poster: "tcam7,.webp",
      description: "Tim Lake là một thanh niên bình thường, sống trong một gia đình có truyền thống đặc biệt: những người đàn ông trong gia đình đều có khả năng du hành thời gian về quá khứ. Vào sinh nhật 21 tuổi, Tim được cha mình tiết lộ bí mật này và hướng dẫn anh cách sử dụng nó.",
      genre: "Chính Kịch, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "dv11.webp" },
      actors: [
        { name: "Henry Czerny", photo: "dv2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "anhnen4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "tc7": {
      title: "Gọi Em Bằng Tên Anh",
      poster: "tcam8,.webp",
      description: "Bộ phim xoay quanh mối quan hệ đầy cảm xúc giữa Elio Perlman, một chàng trai 17 tuổi và Oliver sinh viên 24 tuổi người Mỹ. Mùa hè năm 1983, Oliver đến sống tại dinh thự của gia đình Elio ở Ý để hỗ trợ công việc nghiên cứu của cha Elio. Giữa khung cảnh thơ mộng của miền quê nước Ý, đôi bạn trẻ bất ngờ nảy sinh tình cảm với nhau. Mối tình lãng mạn của họ dần chớm nở giữa những ngày hè rực rỡ, hé mở những khoảnh khắc ngọt ngào và cả những rung động đầy e ấp của tuổi mới lớn.",
      genre: "Chính Kịch, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "g11.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    //theloaihaihuoc
    "hh1": {
      title: "Bỗng Dưng Trúng Số",
      poster: "h1,.webp",
      description: "Một cuộc đàm phán bất ổn giữa những anh lính Hàn Quốc và Triều Tiên, khi có một tờ vé số trúng giải độc đắc lên tới hàng triệu đô được anh Trung sĩ Hàn Quốc vô tình nhặt được, nhưng anh ta lại để chiếc vé số đó cuốn theo chiều gió qua biên giới và rơi vào tay người lính Triều Tiên.",
      genre: "Chiếu Rạp, Hài",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: " Park Gyu-tae", photo: "y1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "y2.webp" },
        { name: "John Cena", photo: "y3.webp" },
        { name: "Simon Pegg", photo: "y4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "hh2": {
      title: "Gái già lắm chiêu V",
      poster: "h2,.webp",
      description: "Khi Lý Linh trở về quê hương với tham vọng đấu giá thành công cổ vật “Phượng Hoàng Tam Vĩ”, mâu thuẫn âm ỉ trong gia đình bắt đầu bùng phát. Cuộc đối đầu giữa chị em không chỉ xoay quanh gia sản, danh vọng, mà còn là cuộc chiến nội tâm giữa truyền thống – hiện đại, gia đình – cá nhân, yêu thương – tổn thương.",
      genre: "Hài hước, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Hồng Vân", photo: "y2.webp" },
      actors: [
        { name: "Lý Lệ Hà", photo: "l2.jpeg" },
        { name: "Lý Lệ Hồng ", photo: "l3.jpeg" },
        { name: "Simon Pegg", photo: "l1.jpeg" },
        { name: "Lý Linh", photo: "dv5.webp" },
        
      ]
    },
    "hh3": {
      title: "Siêu ngốc gặp nhau",
      poster: "h3,.webp",
      description: "Phải đến những hai mươi năm, Jim Carrey và Jeff Daniels mới có cơ hội tái ngộ cùng nhau trong phần hai. Phần hai đưa bộ đôi hài hước đi đến một cuộc phiêu lưu mới, lần này là đi tìm đứa con gái ngoài giá thú của Harry, nhằm mục đích nối lại tình xưa, mà thực tế là tìm người để ghép thận cho anh chàng này.",
      genre: "Hài hước, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "dv1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "hh4": {
title: "Nghề Siêu Dễ",
poster: "h4,.webp",
description: "Một nhóm cảnh sát đã về hưu, dưới sự dẫn dắt của ông Thái – người cầm đầu đầy nhiệt huyết nhưng nóng tính – quyết định mở một quán cơm tấm bình dân ngay đối diện tụ điểm buôn bán ma túy để làm vỏ bọc điều tra. Thế nhưng, họ lại vô tình… kinh doanh thành công ngoài mong đợi, khiến phi vụ điều tra dần mất kiểm soát. Phim mang lại tiếng cười sảng khoái thông qua các tình huống oái oăm, nhưng cũng đặt ra nhiều suy ngẫm về đạo đức, công lý và giá trị con người.",
genre: "Hài hước, Hành động, Tâm lý, Việt Nam",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
   "hh5": {
title: "Hồn Papa, Da Con Gái",
poster: "h5,.webp",
description: "Câu chuyện bắt đầu khi một vụ tai nạn kỳ lạ khiến hồn của ông bố Hải – một giám đốc công ty bận rộn, thực dụng – bất ngờ nhập vào thân xác của cô con gái nhỏ Châu – một học sinh tuổi teen đầy mộng mơ. Trong khi bố phải vật lộn với môi trường học đường và cảm xúc tuổi mới lớn, con gái lại bị cuốn vào thế giới làm ăn đầy căng thẳng của người lớn. Từ đó, họ dần thấu hiểu nhau hơn, học cách lắng nghe và chữa lành những khoảng cách thế hệ giữa cha và con. Bộ phim vừa hài hước, vừa cảm động với thông điệp về tình thân và sự đồng cảm trong gia đình.",
genre: "Hài hước, Gia đình, Tình cảm, Việt Nam",
      genre: "Chính Kịch, Chiếu Rạp, Tâm Lý,Lãng Mạn",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m2.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "hh6": {
title: "Lừa Đểu Gặp Lừa Đảo",
poster: "h6,.webp",
description: "Ina – một cô gái trẻ bị bạn trai cũ lừa tiền – quyết tâm lấy lại những gì đã mất bằng cách tìm đến Tower – một tay lừa đảo siêu hạng, mồm mép và khôn ngoan. Cả hai bắt tay thực hiện một kế hoạch trả thù tinh vi, nhưng càng đi sâu, họ càng nhận ra mình cũng đang dần bị cuốn vào những trò lừa phức tạp hơn. Bộ phim mang đến những pha 'lật mặt' bất ngờ, vừa hài hước vừa kịch tính, nhưng đồng thời cũng chất chứa những bài học sâu sắc về niềm tin, lòng người và tình yêu thật sự.",
genre: "Hài hước, Tình cảm, Tâm lý, Thái Lan",
      episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "dvien3.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "hh7": {
title: "Ai Chết Giơ Tay: Pháp Sư Mù",
poster: "h7,.webp",
description: "Sau sự kiện mất đi đôi mắt trong một lần trừ tà, pháp sư Tinh Lâm bước vào hành trình truy tìm chân tướng kẻ đã thao túng thế giới tâm linh, đồng thời đối diện với nỗi đau mất mát và những giới hạn bản thân. Đồng hành cùng anh là những người bạn vừa quen vừa cũ, tạo nên một hành trình vừa kỳ ảo, vừa đầy tiếng cười lẫn nước mắt. Bộ phim mở rộng vũ trụ 'Ai Chết Giơ Tay' đình đám, kết hợp nhuần nhuyễn yếu tố tâm linh, hài hước và hành động, với thông điệp nhân văn về sự lựa chọn giữa bóng tối và ánh sáng trong mỗi con người.",
genre: "Kinh dị, Hài hước, Tâm linh, Việt Nam",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m4.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
},
//anime
"a1": {
title: "Lạc Vào Khu Rừng Đom Đóm",
poster: "an1,.webp",
description: "Hotaru – một cô bé lạc vào khu rừng thần bí trong kỳ nghỉ hè – tình cờ gặp Gin, chàng trai bị nguyền rủa không thể chạm vào con người. Tình bạn rồi tình yêu chớm nở giữa hai thế giới khác biệt, trong không gian đầy chất thơ, ánh đom đóm và sự lặng lẽ. Một câu chuyện nhẹ nhàng nhưng sâu sắc, khiến người xem phải suy ngẫm về sự mong manh của tuổi trẻ, thời gian và ký ức.",
genre: "Hoạt hình, Tình cảm, Kỳ ảo, Nhật Bản",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "dvien4.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },

"a2": {
title: "Ponyo – Cô Bé Người Cá",
poster: "an2,.webp",
description: "Ponyo – một cô bé người cá hiếu động – trốn khỏi biển cả để lên cạn làm người và kết bạn với cậu bé Sousuke. Cuộc phiêu lưu của Ponyo gây ra hỗn loạn cho cả thế giới, nhưng cũng mang đến thông điệp về tình yêu thuần khiết và sự cân bằng giữa con người với thiên nhiên. Bộ phim là một bản giao hưởng màu sắc, kỳ ảo và cảm động, đặc trưng cho phong cách Ghibli.",
genre: "Hoạt hình, Phiêu lưu, Gia đình, Nhật Bản",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "g11.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"a3": {
title: "Mộ Đom Đóm",
poster: "an3,.webp",
description: "Lấy bối cảnh Thế chiến II, phim kể về hai anh em Seita và Setsuko vật lộn sinh tồn giữa đổ nát và mất mát. Với hình ảnh đom đóm vừa đẹp vừa buồn, phim là bản cáo trạng đầy xúc cảm về hậu quả chiến tranh. Một kiệt tác khiến người xem ám ảnh bởi sự ngây thơ bị đánh mất trong những năm tháng khốc liệt.",
genre: "Hoạt hình, Chiến tranh, Chính kịch, Nhật Bản",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "g11.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"a4": {
title: "Thế Giới Bí Mật Của Arrietty",
poster: "an4,.webp",
description: "Arrietty – một cô bé tí hon sống ẩn mình dưới sàn nhà của con người – vô tình bị phát hiện bởi Sho, một cậu bé mắc bệnh tim. Mối quan hệ giữa hai thế giới nhỏ bé và to lớn mở ra một hành trình cảm động về sự thấu hiểu, lòng tin và tình bạn vượt qua mọi khác biệt.",
genre: "Hoạt hình, Giả tưởng, Gia đình, Nhật Bản",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "g11.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"a5": {
title: "Vùng Đất Linh Hồn",
poster: "an5,.webp",
description: "Chihiro – cô bé lạc vào thế giới linh hồn kỳ lạ sau khi cha mẹ bị biến thành heo – phải vượt qua thử thách để cứu gia đình và tìm lại chính mình. Với hình ảnh kỳ ảo, nhân vật độc đáo và tầng tầng lớp nghĩa, đây là kiệt tác từng đoạt giải Oscar của Studio Ghibli và Hayao Miyazaki, ca ngợi sự trưởng thành, lòng dũng cảm và bản sắc cá nhân.",
genre: "Hoạt hình, Phiêu lưu, Huyền bí, Nhật Bản",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "g11.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
 "a6": {
title: "My Neighbor Totoro",
poster: "an6,.webp",
description: "Hai chị em Satsuki và Mei chuyển về quê sống trong lúc mẹ đang điều trị bệnh, và gặp Totoro – linh vật rừng to lớn nhưng hiền lành. Một câu chuyện đơn giản nhưng đầy xúc cảm về tuổi thơ, thiên nhiên và những điều kỳ diệu chỉ trẻ thơ mới thấy được. Totoro đã trở thành biểu tượng văn hóa toàn cầu của Studio Ghibli.",
genre: "Hoạt hình, Gia đình, Kỳ ảo, Nhật Bản",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "g11.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"a7": {
title: "Dáng Hình Thanh Âm",
poster: "an7,.webp",
description: "Shoya – một nam sinh từng bắt nạt cô bạn khiếm thính Shoko – sau nhiều năm sống trong mặc cảm và tội lỗi, quyết định tìm lại cô để xin lỗi và chuộc lỗi. Bộ phim cảm động về sự chữa lành, thấu hiểu và cơ hội thứ hai trong cuộc sống. Với hình ảnh tinh tế và âm nhạc lay động, đây là một trong những anime giàu cảm xúc nhất của điện ảnh Nhật Bản hiện đại.",
genre: "Hoạt hình, Tình cảm, Tâm lý, Học đường, Nhật Bản",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "g11.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
//my
"my1": {
title: "The Ledge – Vực Thẳm",
poster: "my1.webp",
description: "Sau một thảm kịch bi kịch, một người phụ nữ bị mắc kẹt trên một gờ đá dựng đứng giữa vách núi, đối mặt với sự truy sát tàn nhẫn từ nhóm người nguy hiểm. Cuộc đấu trí và đấu lực giành giật từng giây sự sống trong không gian chật hẹp khiến khán giả nghẹt thở.",
genre: "Hành động, Giật gân, Sinh tồn, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "my1": {
title: "The Ledge – Vực Thẳm",
poster: "my1.webp",
description: "Sau một thảm kịch bi kịch, một người phụ nữ bị mắc kẹt trên một gờ đá dựng đứng giữa vách núi, đối mặt với sự truy sát tàn nhẫn từ nhóm người nguy hiểm. Cuộc đấu trí và đấu lực giành giật từng giây sự sống trong không gian chật hẹp khiến khán giả nghẹt thở.",
genre: "Hành động, Giật gân, Sinh tồn, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "my1": {
title: "The Ledge – Vực Thẳm",
poster: "my1.webp",
description: "Sau một thảm kịch bi kịch, một người phụ nữ bị mắc kẹt trên một gờ đá dựng đứng giữa vách núi, đối mặt với sự truy sát tàn nhẫn từ nhóm người nguy hiểm. Cuộc đấu trí và đấu lực giành giật từng giây sự sống trong không gian chật hẹp khiến khán giả nghẹt thở.",
genre: "Hành động, Giật gân, Sinh tồn, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    "my1": {
title: "The Ledge – Vực Thẳm",
poster: "my1,.webp",
description: "Sau một thảm kịch bi kịch, một người phụ nữ bị mắc kẹt trên một gờ đá dựng đứng giữa vách núi, đối mặt với sự truy sát tàn nhẫn từ nhóm người nguy hiểm. Cuộc đấu trí và đấu lực giành giật từng giây sự sống trong không gian chật hẹp khiến khán giả nghẹt thở.",
genre: "Hành động, Giật gân, Sinh tồn, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
 "my2": {
title: "Thiên Thần & Ác Quỷ",
poster: "my2,.webp",
description: "Robert Langdon quay trở lại trong một cuộc điều tra bí ẩn mới xoay quanh hội kín Illuminati. Phim đưa người xem vào hành trình giải mã các biểu tượng cổ đại xuyên suốt châu Âu, trong cuộc chạy đua với thời gian để ngăn chặn một vụ khủng bố đẫm máu tại Vatican.",
genre: "Hành động, Hình sự, Tâm lý, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
   "my3": {
title: "Trận Chiến Midway",
poster: "my3,.webp",
description: "Dựa trên sự kiện có thật trong Thế chiến II, phim tái hiện lại trận chiến Midway nổi tiếng – nơi Hải quân Hoa Kỳ đối đầu với lực lượng Nhật Bản. Với kỹ xảo ấn tượng và tinh thần yêu nước mãnh liệt, đây là một bản anh hùng ca bi tráng giữa biển trời mênh mông.",
genre: "Chiến tranh, Lịch sử, Hành động, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"my4": {
title: "Kẻ Hủy Diệt 4",
poster: "my4,.webp",
description: "Trong tương lai hậu tận thế, loài người chiến đấu với mạng lưới trí tuệ nhân tạo Skynet. John Connor dẫn đầu lực lượng kháng chiến trong khi một người đàn ông bí ẩn xuất hiện, nắm giữ chìa khóa thay đổi vận mệnh nhân loại. Phim đậm chất hành động và công nghệ cao.",
genre: "Hành động, Khoa học viễn tưởng, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"my5": {
title: "Điệp Viên SALT",
poster: "my5,.webp",
description: "Evelyn Salt – một đặc vụ CIA bị cáo buộc là gián điệp Nga – phải chạy trốn để chứng minh sự vô tội. Cuộc rượt đuổi nghẹt thở giữa lòng thành phố và những pha hành động không ngừng nghỉ tạo nên một bộ phim điệp viên lôi cuốn với nhiều cú twist bất ngờ.",
genre: "Hành động, Trinh thám, Gián điệp, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"my6": {
title: "Mật Mã Da Vinci",
poster: "my6,.webp",
description: "Một vụ ám sát trong viện bảo tàng Louvre đưa giáo sư Langdon vào cuộc hành trình giải mã các biểu tượng tôn giáo cổ xưa. Phim mở ra những bí ẩn xoay quanh Chén Thánh, dòng máu Chúa và những bí mật chấn động lịch sử nhân loại, khiến người xem không thể rời mắt.",
genre: "Hành động, Hình sự, Tâm linh, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"my7": {
title: "Đặc Vụ 355",
poster: "my7,.webp",
description: "Khi một vũ khí công nghệ cao rơi vào tay kẻ xấu, một nhóm đặc vụ nữ từ các quốc gia khác nhau buộc phải hợp tác để ngăn chặn thảm họa toàn cầu. Sở hữu dàn diễn viên đình đám và những pha hành động mãn nhãn, phim ca ngợi sức mạnh và trí tuệ của phụ nữ hiện đại.",
genre: "Hành động, Gián điệp, Quốc tế, Mỹ",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    //vietnam
   "v1": {
title: "Ngày Xưa Có Chuyện Tình",
poster: "v1,.webp",
description: "Ba người bạn lớn lên cùng nhau tại một thị trấn nhỏ yên bình, tình bạn của họ dần chuyển biến thành một mối tình tay ba phức tạp. Những rung động đầu đời, ghen tuông và những lựa chọn sai lầm đã để lại những vết sẹo không thể xóa nhòa.",
genre: "Tình cảm, Tâm lý, Việt Nam",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"v2": {
title: "Mười: Lời Nguyền Trở Lại",
poster: "v2,.webp",
description: "Tiếp nối câu chuyện rùng rợn từ phần đầu, lời nguyền của Mười tái sinh dưới hình hài mới. Khi một nhóm bạn trẻ khám phá quá khứ bị chôn vùi, họ vô tình đánh thức nỗi kinh hoàng vẫn luôn chực chờ trong bóng tối.",
genre: "Kinh dị, Huyền bí, Việt Nam",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
  "v3": {
title: "Ròm",
poster: "v3,.webp",
description: "Cậu bé Ròm sống lang bạt ở Sài Gòn, kiếm sống bằng cách tư vấn số đề cho người nghèo. Phim lột tả chân thực cuộc sống đường phố, sự khắc nghiệt và ước mơ vượt lên số phận của những con người dưới đáy xã hội.",
genre: "Chính kịch, Xã hội, Việt Nam",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"v4": {
title: "Hai Phượng",
poster: "v4,.webp",
description: "Một người mẹ đơn thân từng có quá khứ giang hồ phải liều mạng đi khắp miền Nam để giải cứu con gái khỏi bọn buôn người. Những màn hành động nghẹt thở và cảm xúc mẫu tử mãnh liệt khiến phim trở thành hiện tượng phòng vé.",
genre: "Hành động, Tội phạm, Việt Nam",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
 "v5": {
title: "Em Chưa 18",
poster: "v5,.webp",
description: "Một học sinh trung học thông minh và cá tính bày trò gài bẫy một tay chơi lớn tuổi để trả thù bạn trai cũ. Phim hài hước, trẻ trung và giàu năng lượng, trở thành hiện tượng phòng vé với thông điệp về tình yêu và tuổi trẻ.",
genre: "Hài, Lãng mạn, Học đường, Việt Nam",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"v6": {
title: "Mắt Biếc",
poster: "v6,.webp",
description: "Chuyển thể từ truyện Nguyễn Nhật Ánh, kể về mối tình đơn phương day dứt của Ngạn dành cho cô bạn thời thơ ấu Hà Lan. Những khung hình thơ mộng, âm nhạc buồn man mác, và tình yêu không hồi đáp tạo nên một bản tình ca u sầu.",
genre: "Tình cảm, Lãng mạn, Tâm lý, Việt Nam",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"v7": {
title: "Quỳnh Búp Bê",
poster: "v7,.webp",
description: "Quỳnh – một cô gái bị lừa vào động mại dâm – phải đối mặt với cuộc sống tăm tối, bạo lực và những góc khuất của xã hội. Hành trình tìm lại công lý và khát vọng sống tốt đẹp đã khiến khán giả xúc động sâu sắc.",
genre: "Chính kịch, Xã hội, Tâm lý, Việt Nam",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
    //han
"han1": {
title: "Lovely Runner",
poster: "han1,.webp",
description: "Một nữ sinh trở về quá khứ để cứu lấy thần tượng của mình khỏi kết cục bi thảm. Tình yêu tuổi trẻ, sự hối hận và những cơ hội thứ hai tạo nên câu chuyện cảm động và kỳ ảo về niềm tin và định mệnh.",
genre: "Tình cảm, Giả tưởng, Hàn Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
 "han2": {
title: "Dưa Hấu Lấp Lánh",
poster: "han2,.webp",
description: "Một thiếu niên khiếm thính mang trong mình đam mê âm nhạc gia nhập vào một ban nhạc trường học. Bộ phim mang đến câu chuyện cảm động về sự hòa nhập, khát khao khẳng định bản thân và tình yêu tuổi học trò.",
genre: "Học đường, Tình cảm, Âm nhạc, Hàn Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"han3": {
title: "Tuổi Hai Lăm, Tuổi Hai Mốt",
poster: "han3,.webp",
description: "Kể về mối tình ngọt ngào và trưởng thành của hai người bạn thân khi bước vào ngưỡng cửa tuổi 25 và 21. Những khúc mắc, đổ vỡ và cảm xúc rung động đầu đời gợi lại thanh xuân đầy tiếc nuối và đẹp đẽ.",
genre: "Tình cảm, Thanh xuân, Thể thao, Hàn Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"han4": {
title: "Nữ Hoàng Nước Mắt",
poster: "han4,.webp",
description: "Câu chuyện về cuộc sống đầy sóng gió của một nữ tài phiệt mạnh mẽ nhưng cô độc. Tình yêu, quyền lực và sự phản bội đan xen trong bối cảnh giới thượng lưu tạo nên một bộ phim tâm lý sâu sắc và cuốn hút.",
genre: "Tình cảm, Tâm lý, Chính kịch, Hàn Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },

"han5": {
title: "Cô Gái Thế Kỷ 20",
poster: "han5,.webp",
description: "Lấy bối cảnh năm 1999, một cô nữ sinh giúp bạn thân theo dõi crush và vô tình vướng vào chuyện tình đầu ngọt ngào nhưng đầy tiếc nuối. Những lá thư, máy quay phim và ký ức tuổi trẻ thổn thức trong tim người xem.",
genre: "Tình cảm, Học đường, Hồi tưởng, Hàn Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"han6": {
title: "Hậu Duệ Mặt Trời",
poster: "han6,.webp",
description: "Một đại úy quân đội và nữ bác sĩ tình cờ gặp nhau trong hoàn cảnh chiến tranh khốc liệt. Phim kết hợp hoàn hảo giữa hành động, lãng mạn và lòng yêu nước, trở thành biểu tượng của làn sóng Hallyu.",
genre: "Tình cảm, Hành động, Quân sự, Hàn Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"han7": {
title: "Ngày Không Còn Mẹ",
poster: "han7,.webp",
description: "Một người mẹ mắc bệnh hiểm nghèo lập kế hoạch chuẩn bị cho con trai khuyết tật sống tự lập sau khi bà ra đi. Phim khơi gợi nước mắt về tình mẫu tử, sự hy sinh và tình yêu không điều kiện.",
genre: "Gia đình, Tình cảm, Chính kịch, Hàn Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { name: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
// trung
"tr1": {
title: "Hôn Lễ Của Em",
poster: "tr1,.webp",
description: "Một cuộc hội ngộ định mệnh khiến hai con người xa cách nhiều năm bước vào một cuộc tình mới, vừa ngọt ngào vừa day dứt. Liệu tình yêu có thể vượt qua thử thách thời gian và quá khứ từng tan vỡ?",
genre: "Tình cảm, Chính kịch, Trung Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { nae: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"tr2": {
title: "Yêu Em Từ Cái Nhìn Đầu Tiên",
poster: "tr2,.webp",
description: "Mối tình lãng mạn giữa nữ sinh viên xinh đẹp và thiên tài lập trình nổi tiếng trong thế giới game online. Bộ phim nổi bật với sự hòa quyện giữa thế giới ảo và đời thực, mang đến cảm giác ngọt ngào và dễ thương.",
genre: "Tình cảm, Học đường, Lãng mạn, Trung Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { nae: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"tr3": {
title: "Khi Anh Chạy Về Phía Em",
poster: "tr3,.webp",
description: "Một nữ sinh năng động với tinh thần thể thao mạnh mẽ đã thay đổi cuộc sống của một chàng trai nhút nhát. Chuyện tình học đường rộn ràng tiếng cười, pha lẫn sự trưởng thành và cảm xúc chân thành.",
genre: "Học đường, Tình cảm, Thanh xuân, Trung Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { nae: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"tr4": {
title: "Khó Dỗ Dành",
poster: "tr4,.webp",
description: "Một thiên kim tiểu thư nổi loạn gặp phải chàng cảnh sát trưởng nguyên tắc và lạnh lùng. Những tình huống dở khóc dở cười cùng sự đối đầu hấp dẫn đã dần biến thành một chuyện tình đặc biệt và đáng nhớ.",
genre: "Tình cảm, Hài hước, Chính kịch, Trung Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { nae: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
 "tr5": {
title: "Cô Gái Ta Cùng Theo Đuổi",
poster: "tr5,.webp",
description: "Một nhóm nam sinh cùng thích một cô bạn học xinh đẹp, trong đó có một cậu chàng hậu đậu nhưng chân thành. Phim khơi gợi ký ức học trò và cảm xúc về mối tình đầu đẹp nhưng chưa trọn vẹn.",
genre: "Thanh xuân, Tình cảm, Học đường, Trung Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { nae: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
"tr6": {
title: "Soi Sáng Cho Em",
poster: "tr6,.webp",
description: "Hai con người tổn thương gặp nhau trong những ngày tăm tối nhất của cuộc đời, rồi từ từ sưởi ấm và chữa lành nhau bằng sự chân thành. Phim là hành trình cảm động đi tìm hy vọng và ánh sáng trong cuộc sống.",
genre: "Chính kịch, Tình cảm, Lãng mạn, Trung Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { nae: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },
  "tr7": {
title: "Đông Cung",
poster: "tr7,.webp",
description: "Một công chúa Tây Lương gả sang Trung Nguyên với nhiệm vụ chính trị, vô tình rơi vào mối tình ngang trái với Thái tử. Ân oán, tình yêu và bi kịch đan xen khiến bộ phim trở thành một thiên tình sử đầy nước mắt.",
genre: "Cổ trang, Bi kịch, Tình cảm, Trung Quốc",
episodes: "1 (Phim lẻ)",
      duration: "1h 50m",
      director: { name: "Wade Eastwood", photo: "m1.webp" },
      actors: [
        { name: "Henry Czerny", photo: "g2.webp" },
        { nae: "John Cena", photo: "g3.webp" },
        { name: "Simon Pegg", photo: "m4.webp" },
        { name: "Anthony Edwards", photo: "dv5.webp" },
        
      ]
    },

    }
  const params = new URLSearchParams(window.location.search);
  const filmId = params.get("id");
  const data = films[filmId];
  if (data) {
document.getElementById("movie-title").textContent = data.title;
document.getElementById("poster").src = data.poster;

document.getElementById("detail").innerHTML = `
  <h3 style="text-align:center;font-size:24px;">Chi tiết phim</h3>
  <p><strong>Giới thiệu:</strong> ${data.description}</p>
  <p><strong>Số tập:</strong> ${data.episodes}</p>
  <p><strong>Thể loại:</strong> ${data.genre}</p>
  <p><strong>Thời lượng:</strong> ${data.duration}</p>
  <p><strong>Đạo diễn:</strong></p>
<div class="actor-item">
<img src="${data.director.photo}" alt="${data.director.name}">
<div class="actor-name">${data.director.name}</div>
</div>

  <p><strong>Diễn viên:</strong></p>
  <div class="actor-grid">
    ${data.actors.map(actor => `
      <div class="actor-item">
        <img src="${actor.photo}" alt="${actor.name}">
        <div class="actor-name">${actor.name}</div>
      </div>
    `).join("")}
  </div>
`;

    // ✅ Gọi tab chi tiết
    showTab('detail');
  } else {
    document.getElementById("movie-title").textContent = "Không tìm thấy phim.";
  }

  // ====== HIỂN THỊ TAB ======
  function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
  }

  // ====== VIDEO MODAL ======
  function openModal(videoSrc) {
    const modal = document.getElementById('modal');
    const trailer = document.getElementById('trailer');
    const source = trailer.querySelector('source');

    source.src = videoSrc;
    trailer.load();
    modal.style.display = 'flex';
    trailer.play();
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    const trailer = document.getElementById('trailer');

    trailer.pause();
    trailer.currentTime = 0;
    modal.style.display = 'none';
  }

  // ====== NÚT YÊU THÍCH ======
  document.getElementById("likeButton").addEventListener("click", function () {
    this.classList.add("liked");
    this.innerHTML = '<i class="fas fa-heart"></i> Đã yêu thích';
    alert("Đã thêm vào yêu thích!");
  });

  // ====== GỬI BÌNH LUẬN ======
  function submitComment() {
    const input = document.getElementById("commentInput");
    const list = document.getElementById("commentList");

    const comment = input.value.trim();
    if (comment) {
      const newComment = document.createElement("div");
      newComment.className = "comment-item";
      newComment.innerHTML = `<strong>Bạn:</strong> ${comment}`;
      list.appendChild(newComment);
      input.value = "";
    }
  }

  // Gắn vào global để gọi được từ nút Gửi bình luận
  window.submitComment = submitComment;

