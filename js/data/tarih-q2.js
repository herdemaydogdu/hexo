/* ============================================================
   TARİH — Birleştirilmiş ünitelere ek özgün sorular (Faz E/F)
   Soru bakımından zayıf 15-li ünitelere kapsama ekler.
   Tümü özgün (sourceType:"original").
   ============================================================ */
(function () {
  if (typeof TYT_CONTENT === "undefined") { console.error("tarih-q2: content-loader yüklenmedi"); return; }

  var Q = function (id, unit, q, options, answer, explain, sol) {
    return { id: id, subject: "sosyal", unit: unit, q: q, options: options, answer: answer,
      explain: explain, solution: sol, sourceType: "original", copyrightSafe: true, reviewStatus: "draft" };
  };

  TYT_CONTENT.addQuestions([
    Q("sosyal-tar-islam-001", "tar-islam",
      "Halifeliği saltanat sistemine dönüştüren ilk Müslüman hanedan hangisidir?",
      ["Dört Halife", "Emeviler", "Abbasiler", "Karahanlılar", "Selçuklular"], 1,
      "Emeviler halifeliği babadan oğula geçen saltanata çevirmiştir.",
      { short: "Emeviler halifeliği saltanata çevirdi.", steps: ["Dört Halife seçimle gelirdi.", "Emeviler bunu saltanata dönüştürdü."], whyOthersWrong: ["Abbasiler sonra gelir.", "Karahanlı/Selçuklu Türk-İslam devletleridir."] }),
    Q("sosyal-tar-islam-002", "tar-islam",
      "Beytülhikme adlı bilim ve çeviri merkezi hangi dönemde zirveye ulaşmıştır?",
      ["Emeviler", "Abbasiler", "Dört Halife", "Endülüs", "Gazneliler"], 1,
      "Beytülhikme, Abbasiler döneminde bilim ve çevirinin merkeziydi.",
      { short: "Beytülhikme → Abbasiler.", steps: ["Abbasiler bilime önem verdi.", "Beytülhikme bu dönemde gelişti."], whyOthersWrong: ["Emevi/Dört Halife önce.", "Endülüs/Gazneli ayrı."] }),
    Q("sosyal-tar-selcuklu-001", "tar-selcuklu",
      "Anadolu'nun Moğol (İlhanlı) egemenliğine girmesine yol açan savaş hangisidir?",
      ["Malazgirt", "Miryokefalon", "Kösedağ", "Pasinler", "Yassıçemen"], 2,
      "1243 Kösedağ Savaşı ile Anadolu Selçuklu Moğol egemenliğine girdi.",
      { short: "Kösedağ (1243) → Moğol egemenliği.", steps: ["Anadolu Selçuklu Moğollara yenildi.", "Kösedağ sonrası beylikler dönemi başladı."], whyOthersWrong: ["Malazgirt 1071 (Bizans).", "Miryokefalon Bizans'a karşı zafer.", "Pasinler/Yassıçemen farklı."] }),
    Q("sosyal-tar-selcuklu-002", "tar-selcuklu",
      "Haçlı Seferleri'nin Avrupa açısından en önemli sonuçlarından biri aşağıdakilerden hangisidir?",
      ["Feodalitenin güçlenmesi", "Skolastik düşüncenin zayıflaması", "Kilisenin güçlenmesi", "Ticaretin durması", "Matbaanın bulunması"], 1,
      "Doğu-Batı etkileşimi arttı; kilise otoritesi ve skolastik düşünce zayıfladı.",
      { short: "Skolastik düşünce zayıfladı.", steps: ["Doğu ile temas bilgi/ticaret getirdi.", "Kilise merkezli skolastik anlayış sarsıldı."], whyOthersWrong: ["Feodalite ve kilise zayıfladı, güçlenmedi.", "Ticaret arttı.", "Matbaa ile ilgisi yok."] }),
    Q("sosyal-tar-degisim-001", "tar-degisim",
      "Osmanlı için \"ilk büyük toprak kaybı\" ve diplomasiye geçişin işareti sayılan antlaşma hangisidir?",
      ["Pasarofça", "Karlofça", "Küçük Kaynarca", "Ziştovi", "Yaş"], 1,
      "1699 Karlofça Antlaşması ilk büyük toprak kaybıdır.",
      { short: "Karlofça (1699).", steps: ["Uzun savaşlar sonrası imzalandı.", "İlk büyük toprak kaybı ve diplomasiye geçiş."], whyOthersWrong: ["Pasarofça sonra (1718).", "Küçük Kaynarca 1774.", "Ziştovi/Yaş daha geç."] }),
    Q("sosyal-tar-20yy-001", "tar-20yy",
      "Mustafa Kemal'i askerî bir komutan olarak öne çıkaran ve Osmanlı'nın kazandığı cephe hangisidir?",
      ["Kafkas", "Çanakkale", "Filistin", "Galiçya", "Kanal"], 1,
      "Çanakkale Cephesi'ndeki başarı Mustafa Kemal'i öne çıkardı.",
      { short: "Çanakkale Cephesi.", steps: ["Osmanlı Çanakkale'de kazandı.", "Mustafa Kemal burada öne çıktı."], whyOthersWrong: ["Diğer cephelerde bu çıkış yaşanmadı."] }),
    Q("sosyal-tar-20yy-002", "tar-20yy",
      "I. Dünya Savaşı sonunda imzalanan ve işgallere zemin hazırlayan ateşkes hangisidir?",
      ["Mudanya", "Mondros", "Sevr", "Lozan", "Ankara"], 1,
      "1918 Mondros Ateşkesi işgallere zemin hazırladı.",
      { short: "Mondros (1918).", steps: ["Osmanlı yenildi.", "Mondros Ateşkesi imzalandı; maddeleri işgallere kapı açtı."], whyOthersWrong: ["Mudanya/Lozan Millî Mücadele sonu.", "Sevr antlaşma (ateşkes değil).", "Ankara Fransa ile."] }),
    Q("sosyal-tar-politika-001", "tar-politika",
      "Boğazların yönetiminin Türkiye'ye bırakıldığı 1936 tarihli uluslararası sözleşme hangisidir?",
      ["Lozan", "Montrö Boğazlar Sözleşmesi", "Sadabat Paktı", "Balkan Antantı", "Ankara Antlaşması"], 1,
      "1936 Montrö Sözleşmesi ile Boğazlar Türk denetimine geçti.",
      { short: "Montrö (1936).", steps: ["Boğazlar Lozan'da uluslararası komisyondaydı.", "Montrö ile Türkiye'nin denetimine geçti."], whyOthersWrong: ["Lozan'da denetim tam değildi.", "Sadabat/Balkan paktları farklı.", "Ankara Antlaşması 1921."] })
  ]);
})();
