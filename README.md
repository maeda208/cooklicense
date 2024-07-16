<div class="abc">
<%= form_with url: abc_problems_path, method: :get do |form| %>
<div class="category">
公衆衛生学
</div>
</br>
<div class="sentence">
【1】地域における公衆衛生を取り扱う保健所の設置を規定している法律として正しいものを選びなさい。</div>
 <div class="problem" id="problem1">
  <%= form.submit "1.健康増進法",class: 'select-button' %></br>
  <%= form.submit "2.国民健康保険法",class: 'select-button'  %></br>
  <%= form.submit "3.食品衛生法",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.地域健康法",class: 'select-button'  %></div>
  </br>
   <span class='select-message' style='display:none;'>解説</br>
   健康増進法は厚生労働省、国民健康保険法は総務省、食品衛生法は消費者庁</span>
</div>
</br>
<div class="sentence">
【2】介護保険制度に関する記述について正しいものを選びなさい</div>
 <div class="problem" id="problem2">
  <div class="option">
    <span class='select-message' style='display:none;'>⭕️</span>
<%= form.submit "1.保険者は市町村である",class: 'select-button' %>
</div>
  <%= form.submit "2.第1号被保険者は40歳以上65歳未満の者である",class: 'select-button'  %></br>
  <%= form.submit "3.第2号被保険者は65歳以上の者である",class: 'select-button'  %></br>
  <%= form.submit "4.要介護認定の申請は都道県知事に行う",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   第1号被保険者は65歳以上、第2号被保険者は40歳以上65歳未満、要介護認定の申請は市町村に行う</span>
   </div>
</br>
<div class="sentence">
【3】調理師免許に関して就業地の都道県知事に対して行う申請または届出として正しいものを選びなさい</div>
<div class="problem" id="problem3">
  <%= form.submit "1.調理師免許の申請",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.調理師就業の届出",class: 'select-button'  %></div>
  <%= form.submit "3.調理師名簿の訂正",class: 'select-button'  %></br>
  <%= form.submit "4.調理師免許の書換",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   調理師免許の申請、調理師名簿の訂正、調理師免許の書換は住所地の都道府県知事に対して申請する</span>
   </div>
</br>
<div class="sentence">
【4】ゴキブリが媒介する疾病として正しいものを選びなさい</div>
<div class="problem" id="problem4">
  <%= form.submit "1.日本脳炎",class: 'select-button' %></br>
  <%= form.submit "2.マラリア",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.赤痢",class: 'select-button'  %></div>
  <%= form.submit "4.デング熱",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   日本脳炎、マラリア、デング熱は蚊に刺されることによって感染する</span>
   </div>
</br>
<div class="sentence">
【5】ウイルスによる感染症として正しいものを選びなさい</div>
<div class="problem" id="problem5">
  <%= form.submit "1.コレラ",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.麻疹(はしか)",class: 'select-button'  %></div>
  <%= form.submit "3.結核",class: 'select-button'  %></br>
  <%= form.submit "4.腸管出血性大腸菌感染症",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   コレラ・腸管出血性大腸菌感染症は汚染された飲食物の摂取、結核は空気感染又は飛沫感染</span>
   </div>
</br>
<div class="sentence">
【6】我が国の四代公害病のうち水質汚染の主な原因物質として正しいものを選びなさい</div>
<div class="problem" id="problem6">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.メチル水銀",class: 'select-button' %></div>
  <%= form.submit "2.PM2.5",class: 'select-button'  %></br>
  <%= form.submit "3.二酸化硫黄",class: 'select-button'  %></br>
  <%= form.submit "4.一酸化炭素",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   PM2.5、二酸化硫黄、一酸化炭素は大気汚染</span>
   </div>
</br>
<div class="sentence">
【7】公衆衛生に関係ある活動を行っている国際機関とその略号の組み合わせとして正しいものを選びなさい</div>
<div class="problem" id="problem7">
  <%= form.submit "1.経済協力開発機構 FAO",class: 'select-button' %></br>
  <%= form.submit "2.国連食糧農業機関 ILO",class: 'select-button'  %></br>
  <%= form.submit "3.国際労働機関 OECD",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.世界保健機関 WHO",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   FAOは国連食糧農業機関、ILOは国際労働機関、OECDは経済協力開発機構</span>
   </div>
</br>
<div class="sentence">
【8】「使用者は労働時間が6時間を超える場合において少なくとも45分、8時間を超える場合においては少なくとも1時間以上の休憩時間を労働時間の途中に与えなければならない。」の記述がある法律として正しいものを選びなさい</div>
<div class="problem" id="problem8">
  <%= form.submit "1.労働組合法",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.労働基準法",class: 'select-button'  %></div>
  <%= form.submit "3.労働安全衛生法",class: 'select-button'  %></br>
  <%= form.submit "4.労働関係調整法",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   労働組合法は労働条件の交渉方法</br>
   労働安全衛生法は労働者の安全や健康を確保するための規制</br>
   労働関係調整法は労働争議を予防又は解決するための手続きを定めた法律</span>
   </div>
</br>
<div class="sentence">
【9】人口動態調査について正しいものを選びなさい</div>
<div class="problem" id="problem9">
  <%= form.submit "1.ある時点における人口の状況を10月1日に5年に一度実施される全数調査である",class: 'select-button' %></br>
  <%= form.submit "2.国民の生活実態を明らかにすることを目的に毎年実施される調査である",class: 'select-button'  %></br>
  <%= form.submit "3.出生・死亡・入国・出国などの動きを他の人口関連の資料を得て、毎月1日現在の男女別、年齢階級別の人口を推計する調査である",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.出生・死亡・死産・婚姻・離婚に関する全数調査で、毎年市町村への届出を元に集計される調査である",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   1は国勢調査、2は国民健康・栄養調査、3は人口推計</span>
   </div>
</br>
<div class="sentence">
【10】生活習慣病とその主なリスク要因の組み合わせとして最も適切なものを選びなさい</div>
<div class="problem" id="problem10">
  <%= form.submit "1.肺がん：ヘリコバクター・ピロリ菌",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.大腸がん：高脂肪食",class: 'select-button'  %></div>
  <%= form.submit "3.糖尿病：塩辛いもの",class: 'select-button'  %></br>
  <%= form.submit "4.慢性閉塞性肺疾患(COPD)：ウイルスによる感染症",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   肺がんと慢性閉塞性肺疾患は、タバコに含まれる一酸化炭素・ニコチン・タールがリスク要因</br>
   糖尿病は脂質や糖質の過剰摂取、野菜摂取不足、運動不足等の生活習慣が原因</span>
   </div>
</br>
<div class="category">
食品学
</div></br>
<div class="sentence">
【11】米の加工品に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem11">
  <%= form.submit "1.無洗米は玄米を水に浸して発芽させ乾燥したものである",class: 'select-button' %></br>
  <%= form.submit "2.a化米は米飯を密閉容器に入れ、加圧加熱殺菌したものである",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.上新米はうるち米を洗って水切りし、粉砕、乾燥したものである",class: 'select-button'  %></div>
  <%= form.submit "4.道明寺粉は、うるち米を蒸して乾燥させ、荒く挽いたものである",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   1は発芽玄米、2は容器包装詰加圧加熱殺菌食品、4の道明寺粉はもち米を蒸して乾燥させたもの</span>
   </div>
</br>
<div class="sentence">
【12】豆類に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem12">
  <%= form.submit "1.大豆の成分で最も多いものは、脂質である",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.小豆の炭水化物で最も多いものは、デンプンである",class: 'select-button'  %></div>
  <%= form.submit "3.インゲン豆の若いさやからは、グリーンピースが得られる",class: 'select-button'  %></br>
  <%= form.submit "4.完熟した緑豆は、小豆の代用として用いられる",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   大豆の成分で最も多いものはたんぱく質、グリーンピースはさやえんどう、緑豆はもやしに使われる豆</span>
   </div>
</br>
<div class="sentence">
【13】出世魚に関する組み合わせとして正しいものを選びなさい</div>
<div class="problem" id="problem13">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.ぶり(成魚) いなだ(幼魚)",class: 'select-button' %></div>
  <%= form.submit "2.まさば(成魚) ごまさば(幼魚)",class: 'select-button'  %></br>
  <%= form.submit "3.すずき(成魚) わらさ(幼魚)",class: 'select-button'  %></br>
  <%= form.submit "4.かんぱち(成魚) はまち(幼魚)",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
  まさばは出世魚ではありません、すずきの幼魚(せいご→ふっこ)、かんぱちの幼魚(しょご)</span>
   </div>
</br>
<div class="sentence">
【14】食肉に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem14">
  <%= form.submit "1.と体から皮と内臓、頭や四肢先端、尾の部分を除去したものを精肉という",class: 'select-button' %></br>
 <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.食肉に含まれるミオグロビンの量は、肉の色に関係する",class: 'select-button'  %></div>
  <%= form.submit "3.エラスチンは、食肉の主要な旨み成分である",class: 'select-button'  %></br>
  <%= form.submit "4.生後1年未満の子羊肉をマトンと呼ぶ",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   精肉とは直接調理できるように形を整えた食肉</br>
   食肉の主要なうまみ成分はイノシン酸</br>
   生後1年未満の子羊肉はラム</span>
   </div>
</br>
<div class="sentence">
【15】鶏卵に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem15">
  <%= form.submit "1.鶏卵には、すべての栄養素が含まれている",class: 'select-button' %></br>
  <%= form.submit "2.卵黄には、溶菌作用を持つたんぱく質が含まれている",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.卵黄の色は、飼料に由来するカロテノイド色素によるものである",class: 'select-button'  %></div>
  <%= form.submit "4.鮮度の低下とともに、濃厚卵白の粘度が上昇する",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   鶏卵にビタミンCは含まれていない</br>
   溶菌作用を持つたんぱく質は卵白に含まれる</br>
   鮮度が低下すると粘度は落ちる</span>
   </div>
</br>
<div class="sentence">
【16】油脂に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem16">
  <%= form.submit "1.オリーブ油は、乾性油である",class: 'select-button' %></br>
  <%= form.submit "2.てんぷら油は、サラダ油より精製度が高い",class: 'select-button'  %></br>
  <%= form.submit "3.ラード(豚脂)は、ヘッド(牛脂)に比べ融点が高い",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.褐色のごま油は、ゴマを焙煎した後に圧搾したものである",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   オリーブ油は不乾性油</br>
   てんぷら油はサラダ油より精製度が低い</br>
   ラードの融点は28~40℃、ヘッドの融点は40~50℃</span>
   </div>
   </br>
<div class="category">
栄養学
</div>
</br>
<div class="sentence">
【17】無機質(ミネラル)に関する記述について、誤っているものを選びなさい</div>
<div class="problem" id="problem17">
  <%= form.submit "1.人体を構成する元素の約4%を占める",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.体内で作ることができる",class: 'select-button'  %></div>
  <%= form.submit "3.骨と歯の構成成分となる",class: 'select-button'  %></br>
  <%= form.submit "4.体液の浸透圧を調節する",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   体内で作ることができないため、外部から摂取する必要がある</span>
   </div>
</br>
<div class="sentence">
【18】脂質に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem18">
  <%= form.submit "1.食品中の脂質の大部分は、コレステロールである",class: 'select-button' %></br>
  <%= form.submit "2.中性脂肪は、複合脂質である",class: 'select-button'  %></br>
  <%= form.submit "3.中性脂肪は、ホルモンの合成材料となる",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.脂質には、リンを含むものがある",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   食品中の脂質の大部分は中性脂肪(トリアシグリセロール)</br>
   中性脂肪は単純脂質</br>
   ホルモンの材料になるのはコレステロール</span>
   </div>
</br>
<div class="sentence">
【19】食物繊維に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem19">
  <%= form.submit "1.人の消化酵素で分解される",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.水溶性と不溶性がある",class: 'select-button'  %></div>
  <%= form.submit "3.動物性食品には存在しない",class: 'select-button'  %></br>
  <%= form.submit "4.生活習慣病予防のために成人では1日1g以下の摂取を目標とする",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   消化酵素では分解されず大腸まで到達する</br>
   わずかながら動物性食品にも存在する</br>
   1日の摂取基準は男性21g、女性18g</span>
   </div>
</br>
<div class="sentence">
【20】脂質と結合したたんぱく質として、正しいものを選びなさい</div>
<div class="problem" id="problem20">
  <%= form.submit "1.カゼイン",class: 'select-button' %></br>
  <%= form.submit "2.ミオグロビン",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.リポたんぱく質",class: 'select-button'  %></div>
  <%= form.submit "4.ムチン",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   カゼインは牛乳の主要たんぱく質</br>
   ミオグロビンは肉や赤身魚の色素</br>
   ムチンはムコたんぱく質と糖たんぱく質の混合物</span>
   </div>
</br>
<div class="sentence">
【21】小腸に関する記述について誤っているものを選びなさい</div>
<div class="problem" id="problem21">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.盲腸・結腸・直腸からなる",class: 'select-button' %></div>
  <%= form.submit "2.膵液が分泌される",class: 'select-button'  %></br>
  <%= form.submit "3.でんぷんが消化される",class: 'select-button'  %></br>
  <%= form.submit "4.アミノ酸が吸収される",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   盲腸・結腸・直腸からなるのは大腸</span>
   </div>
</br>
<div class="sentence">
【22】「日本人の食事摂取基準(2015年版)]において、生活習慣病の予防を目的に「目標量」が設定されている栄養素として、正しいものを選びなさい</div>
<div class="problem" id="problem22">
  <%= form.submit "1.ビタミンA",class: 'select-button' %></br>
  <%= form.submit "2.葉酸",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.ナトリウム",class: 'select-button'  %></div>
  <%= form.submit "4.鉄",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   ビタミンA、葉酸、鉄は推定平均必要量、推奨量、耐容上限量が定められている</span>
   </div>
</br>
<div class="sentence">
【23】「食事バランスガイド」における区分と1つ(SV)の基準の組み合わせとして誤っているものを選びなさい</div>
<div class="problem" id="problem23">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.主食：炭水化物約200g",class: 'select-button' %></div>
  <%= form.submit "2.副菜：主材料の重量約70g",class: 'select-button'  %></br>
  <%= form.submit "3.主菜：たんぱく質約6g",class: 'select-button'  %></br>
  <%= form.submit "4.牛乳・乳製品：カルシウム約100mg",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   炭水化物は約40g</span>
</div>
</br>
<div class="sentence">
【24】脂溶性ビタミンの供給に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem24">
  <%= form.submit "1.ビタミンAは、皮膚で作られる",class: 'select-button' %></br>
  <%= form.submit "2.ビタミンDは、β-カロテンの摂取で生成する",class: 'select-button'  %></br>
  <%= form.submit "3.ビタミンEは、エルゴステロールに紫外線が当たると生成する",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.ビタミンKは、納豆に多く含まれる",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   1と3はビタミンD、2はビタミンA</span>
   </div>
</br>
<div class="sentence">
【25】水分代謝に関する記述について、誤っているものを選びなさい</div>
<div class="problem" id="problem25">
  <%= form.submit "1.発汗は、体温調節に重要である",class: 'select-button' %></br>
  <%= form.submit "2.主たる摂取は、飲料水と食物中の水分による",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.体重に占める水分重量の割合は、年齢で変わらない",class: 'select-button'  %></div>
  <%= form.submit "4.体水分量が少なくなると喉の渇きを感じる",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   成人は約60%、高齢者は50%、新生児は70～80%</span>
   </div>
   </br>
<div class="category">
食品衛生学
</div></br>
<div class="sentence">
【26】寄生虫に関する記述について、正しいものを選びなさい</div>
<div class="problem" id="problem26">
  <%= form.submit "1.肝吸虫は、加熱が不十分な豚肉の摂取により感染する",class: 'select-button' %></br>
  <%= form.submit "2.サルコシスティス・フェアリーは、鶏肉の生食により感染する",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.クドア・セプテンプンクタータはヒラメの生食により感染する",class: 'select-button'  %></div>
  <%= form.submit "4.さば中のアニサキスは、食酢の作用で死滅する",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   肝吸虫はマメタニシや淡水魚に宿る</br>
   サルコシスティス・フェアリーが発生するのは馬肉</br>
   アニサキスは加熱又は冷凍貯蔵で死滅する</span>
   </div>
</br>
<div class="sentence">
【27】サルモネラ属菌による食中毒に関する記述について正しいものを選びなさい</div>
<div class="problem" id="problem27">
  <%= form.submit "1.潜伏期は、1~3時間と短い",class: 'select-button' %></br>
  <%= form.submit "2.食品内毒素型食中毒である",class: 'select-button'  %></br>
  <%= form.submit "3.主な原因食品は、生食する魚介類である",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.二次汚染に注意する必要がある",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   潜伏期は10~24時間</br>
   食品内毒型食中毒は、黄色ブドウ球菌やボツリヌス菌、セレウス菌など</br>
   主な原因食品は、保菌動物の肉や卵、鶏卵加工を、加熱不十分のまま摂取すること</span>
   </div>
</br>
<div class="sentence">
【28】食品とその食中毒の主な原因物質の組み合わせとして、正しいものを選びなさい</div>
<div class="problem" id="problem28">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.オニカマス : シガトキシン",class: 'select-button' %></div>
  <%= form.submit "2.アサリ : テトロドトキシン",class: 'select-button'  %></br>
  <%= form.submit "3.イシナギ : ビタミンE",class: 'select-button'  %></br>
  <%= form.submit "4.フグ : エンテロトキシン",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   アサリに含まれる主な毒はサキシトキシン、イシナギはビタミンA、フグはテトロドトキシン</span>
   </div>
</br>
<div class="sentence">
【29】冷凍食品に関する記述について、正しいものを選びなさい</div>
<div class="problem" id="problem29">
  <%= form.submit "1.保存温度は、食品衛生法で-10℃以下と定められている",class: 'select-button' %></br>
  <%= form.submit "2.輸送中の場合は、冷蔵の温度帯を保てば良い",class: 'select-button'  %></br>
  <%= form.submit "3.冷凍により細菌を完全に死滅させることができる",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.低音で急速に冷凍することにより品質劣化を防止する",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   保存温度は-15℃以下</br>
   輸送中も冷凍の温度帯を保たなければならない</br>
   細菌を死滅させることはできません</span>
   </div>
</br>
<div class="sentence">
【30】食器に関する記述について、正しいものを選びなさい</div>
<div class="problem" id="problem30">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.磁器は、陶器に比べ透光性がある",class: 'select-button' %></div>
  <%= form.submit "2.メラミン樹脂製の食器は、電子レンジの加熱に向いている",class: 'select-button'  %></br>
  <%= form.submit "3.ガラス器は、急激な温度変化に強い",class: 'select-button'  %></br>
  <%= form.submit "4.ポリプロピレン製の食器は、熱硬化性樹脂である",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   メラミン樹脂製は電子レンジ不可</br>
   ガラス器は急激な温度変化に弱い</br>
   ポリプロピレン製の食器は熱可塑性樹脂</span>
   </div>
</br>
<div class="sentence">
【31】加熱後食材の再調理を行う作業区域として、正しいものを選びなさい</div>
<div class="problem" id="problem31">
  <%= form.submit "1.検収場",class: 'select-button' %></br>
  <%= form.submit "2.原材料保管場",class: 'select-button'  %></br>
  <%= form.submit "3.下処理場",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.調製場",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   検収場、原材料保管場、下水処理場は汚染作業区域</span>
   </div>
</br>
<div class="sentence">
【32】食品添加物とその用途の組み合わせとして、正しいものを選びなさい</div>
<div class="problem" id="problem32">
  <%= form.submit "1.保存料 : カビの増殖を抑える",class: 'select-button' %></br>
  <%= form.submit "2.着色料 : 食品中の成分と反応して色調を安定させる",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.殺菌料 : 食品製造機器の消毒に利用する",class: 'select-button'  %></div>
  <%= form.submit "4.防ばい剤 : 微生物の増殖を抑える",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   保存料はカビや微生物などの発育を抑制、着色料は食品を着色、防ばい剤はカビを防ぐ</span>
   </div>
</br>
<div class="sentence">
【33】加熱による殺菌・消毒法とその加熱温度・時間及び適している用途の組み合わせとして、正しいものを選びなさい</div>
<div class="problem" id="problem33">
  <%= form.submit "1.熱湯消毒：80℃の熱湯で1分間以上：ふきん",class: 'select-button' %></br>
  <%= form.submit "2.煮沸消毒：煮沸した状態で30秒間以上：調理器具",class: 'select-button'  %></br>
  <%= form.submit "3.低温殺菌法：50℃で10分間：牛乳",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.加圧加熱殺菌法 120℃で4分間以上 レトルトパウチ食品",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   熱湯消毒は85℃以上の熱湯で5分以上</br>
   煮沸消毒は沸騰状態で5分以上、調理器具には適さない</br>
   低温殺菌法は60~70℃で30分以上</span>
   </div>
</br>
<div class="sentence">
【34】食中毒の発生状況に関する記述について、誤っているものを選びなさい</div>
<div class="problem" id="problem34">
  <%= form.submit "1.細菌性食中毒が7~9月に多いのは、高温多湿の気候に関係する",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.自然毒食中毒は、季節とは関係なく発生する",class: 'select-button'  %></div>
  <%= form.submit "3.化学性食中毒は、有毒な化学物質の摂取によって起こる",class: 'select-button'  %></br>
  <%= form.submit "4.ウイルス性食中毒は、ノロウイルスによる発生が多い",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   自然毒食中毒は季節と関係して発生する</span>
   </div>
</br>
<div class="sentence">
【35】ノロウイルスによる食中毒の予防に関する記述について、誤っているものを選びなさい</div>
<div class="problem" id="problem35">
  <%= form.submit "1.調理従事者は、感染を避けるため定期的に検便を行う",class: 'select-button' %></br>
  <%= form.submit "2.調理従事者は、正しい手洗い方法を習慣化する",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.食品は、4℃以下で保存する",class: 'select-button'  %></div>
  <%= form.submit "4.食品は、中心温度85~90℃、90秒以上で加熱する",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   予防になるのは食材の加熱調理</span>
   </div>
</br>
<div class="sentence">
【36】アレルギー物質の表示に関する記述について、正しいものを選びなさい</div>
<div class="problem" id="problem36">
  <%= form.submit "1.特定原材料5品目、それに準ずるもの18品目が食品表示法で規定されている",class: 'select-button' %></br>
  <%= form.submit "2.特定原材料には、症例数の多いものとして「いか」が含まれている",class: 'select-button'  %></br>
  <%= form.submit "3.特定原材料に準ずるものとして、可能な限り表示する食品に「あじ」が含まれている",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.表示では、個々の原材料名ごとに記載される「個別表示」を原則としている",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   特定原材料は8品目(卵、乳、小麦、そば、落花生、えび、かに、くるみ)</br>
   準ずるものは21品目、可能な限り表示する食品にあじは含まれていない</span>
   </div>
</br>
<div class="sentence">
【37】食品安全基本法における食品供給工程と同一語として、最も適切なものを選びなさい</div>
<div class="problem" id="problem37">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.フードチェーン",class: 'select-button' %></div>
  <%= form.submit "2.フードバンク",class: 'select-button'  %></br>
  <%= form.submit "3.HACCPプラン",class: 'select-button'  %></br>
  <%= form.submit "4.HACCPチーム",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   フードバンクは生活の苦しい者などに配給する活動や活動団体</br>
   HACCPプランはHACCPの原則に従い作成する計画</br>
   HACCPチームはHACCPシステムを導入、推進していくうえで主となるチーム</span>
   </div>
</br>
<div class="sentence">
【38】食品衛生行政に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem38">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.食品関係の営業施設の基準は都道府県知事が条例で定めている。",class: 'select-button' %></div>
  <%= form.submit "2.飲食店を営む場合、厚生労働大臣の許可が必要である。",class: 'select-button'  %></br>
  <%= form.submit "3.保健所は、厚生労働省の附属機関である。",class: 'select-button'  %></br>
  <%= form.submit "4.食品安全委員会は、農林水産省の附属機関である。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   飲食店を営む場合は都道府県知事の許可が必要</br>
   保健所は都道府県の附属機関</br>
   食品安全委員会は内閣府の附属機関</span>
   </div>
</br>
<div class="sentence">
【39】食品営業施設・設備の衛生管理に関する記述について、正しいものを一つ選びなさい</div>
<div class="problem" id="problem39">
  <%= form.submit "1.床面をウェットに保つことで、湿度が低くなり細菌の増殖を抑えられる。",class: 'select-button' %></br>
 <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.手洗い設備は、自動給水方式にすると手指の汚染リスクを減らせる。",class: 'select-button'  %></div>
  <%= form.submit "3.採光、換気、通風をよくするため、調理作業中は扉や窓を開放する。",class: 'select-button'  %></br>
  <%= form.submit "4.冷蔵庫内の温度は、庫内にできるだけ隙間なく食品を入れた方が安定する。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   床面はドライに保つ</br>
   扉や窓の開放は害虫や害獣の侵入の恐れがある</br>
   冷蔵庫内の温度はスペースに余裕を持って使用する方が安定する</span>
   </div>
</br>
<div class="sentence">
【40】食品添加物の表示に関する記述で、（　　　）に入る語句の組み合わせとして、正しいものを一つ選びなさい。</br>
『保存料、甘味料、酸化防止剤、（　A　）、（　B　）などの 8 種類の用途のものには、その用途名と物質名を併記することが食品表示法で定められている。』</div>
<div class="problem" id="problem40">
  <%= form.submit "1.A：乳化剤　　B：防かび剤",class: 'select-button' %></br>
  <%= form.submit "2.A：着色料　　B：酸味料",class: 'select-button'  %></br>
  <%= form.submit "3.A：糊料　　　B：苦味料",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.A：発色剤　　B：漂白剤",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   乳化剤、酸味料、苦味料は定められていない</span>
   </div>
   </br>
<div class="category">
調理理論
</div></br>
<div class="sentence">
【41】焼き物調理に関する記述について、正しいものを一つ選びなさい</div>
<div class="problem" id="problem41">
  <%= form.submit "1.焼き物は、湿式加熱で直火焼きと間接焼きがある。",class: 'select-button' %></br>
  <%= form.submit "2.魚の切り身を調味してから串に刺して、炭火の上で加熱するのは、間接焼きである。",class: 'select-button'  %></br>
  <%= form.submit "3.鶏肉をアルミ箔で包み、オーブンで焼くのは、直火焼きである。",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.食パンをオーブントースターで焼くのは、直接焼きである。",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   焼き物は乾式加熱、串焼きは直火焼、包み焼きは間接加熱</span>
   </div>
  </br>
    <div class="sentence">
【42】調理用語とその調理内容の組み合わせとして、正しいものを一つ選びなさい</div>
<div class="problem" id="problem42">
  <%= form.submit "1.照り焼き：表面に卵黄を塗り、乾く程度に炙ったものである。",class: 'select-button' %></br>
  <%= form.submit "2.立て塩：材料に塩を振りかけ、下味をつける操作である",class: 'select-button'  %>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.煮こごり：魚の煮汁が冷えてゼリー状に固まったものである。",class: 'select-button'  %></div>
  <%= form.submit "4.煮切り：汁がほとんどなくなるまで煮詰める操作である。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   1は黄身焼き、2は振り塩、4は煮しめ</span>
   </div>
  </br>
  <div class="sentence">
【43】香辛料に関する記述について、正しいものを一つ選びなさい</div>
<div class="problem" id="problem43">
  <%= form.submit "1.香辛料とは、辛味をつける目的だけに使われる。",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.ペッパーには、食欲増進効果がある。",class: 'select-button'  %></div>
  <%= form.submit "3.ターメリックやサフランは、主に料理の香り付けに使われる。",class: 'select-button'  %></br>
  <%= form.submit "4.ブーケガルニは、香辛料を粉末にしたもので、料理に色を付けるために使われる。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   香辛料は食欲の促進や香りづけの目的もある</br>
   ターメリックやサフランは色付けにも使われる</br>
   ブーケガルニは風味づけにも使われる</span>
   </div>
</br>
<div class="sentence">
【44】ゼラチンゼリーに関する記述について、正しいものを一つ選びなさい</div>
<div class="problem" id="problem44">
  <%= form.submit "1.ゼラチンの主成分は、脂質である。",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.ゼラチンは、水に浸漬して吸水膨潤させてから加熱溶解する。",class: 'select-button'  %></div>
  <%= form.submit "3.砂糖の添加によりゼリー強度は低下する。",class: 'select-button'  %></br>
  <%= form.submit "4.酸性条件下（ pH4 以下）でもゼリー強度は低下しない。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   ゼラチンの主成分はたんぱく質</br>
   砂糖の添加でゼリー強度は安定する</br>
   酸性条件下ではゼリー強度は低下する</span>
   </div>
</br>
<div class="sentence">
【45】牛乳に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem45">
  <%= form.submit "1.加熱して 40 ℃にすると表面にたんぱく質の皮膜を張る。",class: 'select-button' %></br>
  <%= form.submit "2.有機酸の多い野菜類の煮込みに適する。",class: 'select-button'  %></br>
  <%= form.submit "3.牛乳中のカルシウムイオンは、卵のたんぱく質の熱凝固を阻害する。",class: 'select-button'  %></br>
 <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.ムニエルでは、牛乳に浸しておくと焼き色がよくなる。",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   40℃以上でできる皮膜はたんぱく質と脂肪</br>
   有機酸の多い野菜の煮込みには適さない</br>
   カルシウムイオンは卵のたんぱく質の熱凝固を促進する</span>
   </div>
</br>
<div class="sentence">
【46】合わせ調味料とその材料の組み合わせとして、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem46">
  <%= form.submit "1.三杯酢 ----------- 砂糖・酢",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.割りじょうゆ ----- しょうゆ・だし汁・酒",class: 'select-button'  %></div>
  <%= form.submit "3.田楽みそ --------- みりん・砂糖・酒 ",class: 'select-button'  %></br>
  <%= form.submit "4.吉野酢 ----------- 卵黄・酢・塩・砂糖・葛でんぷん",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   三杯酢はしょうゆ、酢、みりん又は砂糖</br>
   田楽みそはみそ、砂糖、酒</br>
   吉野酢はしょうゆ、塩、砂糖、くず粉</span>
   </div>
</br>
<div class="sentence">
【47】浸漬に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem47">
  <%= form.submit "1.食品を浸漬する操作には、酢や食塩は用いない。",class: 'select-button' %></br>
  <%= form.submit "2.うどやごぼうを浸漬する目的は、塩分を除くことである。",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.乾物を浸漬する目的は、水分を含ませて柔らかく戻すことである。",class: 'select-button'  %></div>
  <%= form.submit "4.じゃがいもを浸漬する目的は、乾燥を防ぐためである。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   浸漬には酢や食塩を用いる場合もある</br>
   うどやごぼうを浸漬する目的はあく抜きのため</br>
   じゃがいもを浸漬する目的は褐変防止のため</span>
   </div>
</br>
<div class="sentence">
【48】炒（いた）め物に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem48">
  <%= form.submit "1.油脂を使用し高温で加熱するため、栄養成分の損失が煮物より多い。",class: 'select-button' %></br>
  <%= form.submit "2.食品の表面に油脂の膜ができるため、調味料が浸透しやすい。",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.高温短時間で加熱を行うため、形や大きさをそろえて切る。",class: 'select-button'  %></div>
  <%= form.submit "4.材料を混ぜながら加熱するので、材料は中華鍋一杯に入れてもよい",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   油脂の高温加熱は栄養成分の損失が煮物より少ない</br>
   調味料は浸透しずらくなる</br>
   材料は中華鍋に余裕を持って入れた方が良い</span>
   </div>
   </br>
   <div class="sentence">
【49】米粉の調理に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem49">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.粒度が細かいほど吸水率は高い。",class: 'select-button' %></div>
  <%= form.submit "2.ぎゅうひは上新粉に水を加えて加熱後、砂糖を加えて練ったものである。",class: 'select-button'  %></br>
  <%= form.submit "3.上新粉に白玉粉を加えて練ると生地は硬くなる。",class: 'select-button'  %></br>
  <%= form.submit "4.上新粉に片栗粉を加えて練ると生地は柔らかくなる。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   ぎゅうひは白玉粉に水と砂糖を加えて練ったもの</br>
   上新粉に白玉粉を加えて練ると生地は柔らかくなる</br>
   上新粉に片栗粉を加えて練ると生地は硬くなる</span>
   </div>
   </br>
   <div class="sentence">
【50】小麦粉生地の調製時に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem50">
  <%= form.submit "1.ドウは、小麦粉 1 に対して水分を 10 %程度加えたものである。",class: 'select-button' %></br>
 <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.バッターは、小麦粉 1 に対して水分を 1 ～ 4 倍程度加えたものである。",class: 'select-button'  %></div>
  <%= form.submit "3.牛乳の換水値は、水を 1 とした場合、0.5 である。",class: 'select-button'  %></br>
  <%= form.submit "4.中華めんが黄色になるのは、練る時に加える水が酸性だからである。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   ドウは小麦粉1に対して水分50%</br>
   牛乳の換水値は0.9</br>
   中華麺に加えるかん水はアルカリ性</span>
   </div>
   </br>
   <div class="sentence">
【51】いも類の調理性に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem51">
  <%= form.submit "1.とろろは、やまのいもの皮を剥き、ゆでてからすりおろすとよい。",class: 'select-button' %></br>
  <%= form.submit "2.さといもを剥く時、手にかゆみを感じることがあるのは、いも中の硝酸ナトリウムの結晶が手に刺さるためである。",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.ごりいもとは、じゃがいもなど加熱中断により組織が硬化したものである。",class: 'select-button'  %></div>
  <%= form.submit "4.さつまいもは、みょうばん溶液でゆでると白く仕上がる。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   とろろは生のまますりおろすとよい</br>
   さといものかゆみ成分はシュウ酸カルシウム</br>
   さつまいもはみょうばん溶液でゆでると黄色く仕上がる</span>
   </div>
</br>
<div class="sentence">
【52】豚肉の調理に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem52">
  <%= form.submit "1.豚肉が牛肉より肉色が薄いのは、ヘモグロビン量が少ないからである。",class: 'select-button' %></br>
  <%= form.submit "2.豚肉の熟成期間は牛、豚、鶏のうち豚が最も短い。",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.豚肉をしょうが汁に漬けてから焼くと軟らかくなるのは、しょうが中の酵素の働きによる。",class: 'select-button'  %></div>
  <%= form.submit "4.豚肉の脂肪は、口中の温度で溶けないので冷めたい肉料理には適さない。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   豚肉の肉色が薄いのはミオグロビン量が少ないから</br>
   熟成期間が最も短いのは鶏肉</br>
   豚肉の脂肪は口中で溶けやすいため冷たい料理に適している</span>
   </div>
   </br>
   <div class="sentence">
【53】バターの調理性に関する記述で、（　　　）に入る語句の組み合わせとして、正しいものを一つ選びなさい。</br>
『バターのエマルションは（　A　）であり、小麦粉の中に練り込んでから焼くとサクサク感が得られ、この性質を（　B　）という。』</div>
<div class="problem" id="problem53">
  <%= form.submit "1.A：水中油滴型　　B：ショートニング性",class: 'select-button' %></br>
  <%= form.submit "2.A：水中油滴型　　B：クリ―ミング性",class: 'select-button'  %></br>
  <%= form.submit "3.A：油中水滴型　　B：可塑性",class: 'select-button'  %></br>
 <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.A：油中水滴型　　B：ショートニング性",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   水中油滴型は牛乳や生クリーム</br>
   クリーミング性は攪拌した際に空気を多量に取り込みやわらかい状態になること</br>
   可塑性は自在に形を変えられること</span>
   </div>
</br>
<div class="sentence">
【54】れんこんの調理性に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem54">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.鉄の包丁で切ってしばらくおくと、表面が変色する。",class: 'select-button' %></div>
  <%= form.submit "2.食塩を入れて煮ると、色が白くなる。",class: 'select-button'  %></br>
  <%= form.submit "3.酢水でゆでると、歯切れが悪くなる。",class: 'select-button'  %></br>
  <%= form.submit "4.すりおろす時に砂糖を加えると、褐変が抑制される。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   酢水でゆでると色が白くなり、歯切れがよくなる</br>
   すりおろす際に酢を加えると褐変が抑制される</span>
   </div>
</br>
<div class="sentence">
【55】鍋に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem55">
  <%= form.submit "1.丸底の中華鍋は、炒（いた）め物には適するが、蒸し物・煮物には不適である。",class: 'select-button' %></br>
  <%= form.submit "2.圧力鍋は、内部温度が 150 ℃までの高温加熱が可能である。",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.ホーロー鍋は、酸・アルカリに強く、ジャム等の調理に適する。",class: 'select-button'  %></div>
  <%= form.submit "4.表面を樹脂でコーティングしたフライパンは、十分に空焼きしてから用いる。",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   丸底の中華鍋は蒸し物・煮物に適している</br>
   圧力鍋の内部温度は120℃まで</br>
   樹脂でコーティングしたフライパンは空焼きすると有害性が生じる</span>
   </div>
</br>
<div class="sentence">
【56】食品の冷蔵・冷凍・解凍に関する記述について、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem56">
  <%= form.submit "1.急速冷凍は、最大氷結晶生成帯の通過時間を長くして冷凍する方法である。",class: 'select-button' %></br>
  <%= form.submit "2.葉菜類を冷凍する場合は、洗浄後ただちに冷凍する。",class: 'select-button'  %></br>
  <%= form.submit "3.魚介類の解凍は、必ず急速解凍で行う。",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.さつまいもは冷蔵（ 5 ℃）で保存すると、低温障害を起こす。",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   急速冷凍は、最大氷結晶生成帯の通過時間を短くして冷凍する方法</br>
   葉菜類を冷凍する場合は、洗浄後しっかりと水けを拭き取ってから冷凍する</br>
   魚介類の解凍は、必ず緩慢解凍で行う
   </span>
   </div>
   </br>
<div class="category">
食文化概論
</div></br>
<div class="sentence">
【57】厚生労働省の国民健康・栄養調査による食品群別摂取量の数値において、昭和50年（1975年）と平成27年（2015年）を比較して減少した食品類を一つ選びなさい。</div>
<div class="problem" id="problem57">
  <%= form.submit "1.緑黄色野菜",class: 'select-button' %></br>
  <%= form.submit "2.牛乳・乳製品",class: 'select-button'  %></br>
  <%= form.submit "3.肉類",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "4.魚介類",class: 'select-button'  %></div>
   <span class='select-message' style='display:none;'>解説</br>
   緑黄色野菜、牛乳・乳製品、肉類は増加</span>
   </div>
  </br>
  <div class="sentence">
【58】都道府県とその地域に発達したすしの名称の組み合わせとして、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem58">
  <%= form.submit "1.東京都 -------- バッテラ",class: 'select-button' %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "2.岡山県 -------- ばらずし",class: 'select-button'  %></div>
  <%= form.submit "3.滋賀県 -------- 柿の葉ずし",class: 'select-button'  %></br>
  <%= form.submit "4.大阪府 -------- ふなずし",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   バッテラは大阪府、柿の葉ずしは奈良県、ふなずしは滋賀県</span>
   </div>
   </br>
   <div class="sentence">
【59】とうもろこし粉を使用している料理として、正しいものを一つ選びなさい。</div>
<div class="problem" id="problem59">
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "1.トルティージャ（メキシコ料理）",class: 'select-button' %></div>
  <%= form.submit "2.カーシャ（ロシア料理）",class: 'select-button'  %></br>
  <%= form.submit "3.ロティ（ネパール料理）",class: 'select-button'  %></br>
  <%= form.submit "4.ほうとう（日本料理）",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   カーシャは小麦、ロティは全粒粉、ほうとうは小麦粉</span>
   </div>
</br>
<div class="sentence">
【60】和食器に関する記述で、（　　　）に入る語句の組み合わせとして、正しいものを一つ選びなさい。</br>
『食器具類の中で（　A　）は、素地が緻密で高温の窯で焼くため硬く、たたくと金属のような音が特徴であり、石川県の（　B　）焼など、日本の代表的な食器具類として海外でも人気が高い。』</div>
<div class="problem" id="problem60">
  <%= form.submit "1.A：漆器　　B：益子",class: 'select-button' %></br>
  <%= form.submit "2.A：陶器　　B：常滑 ",class: 'select-button'  %></br>
  <div class="option">
  <span class='select-message' style='display:none;'>⭕️</span>
  <%= form.submit "3.A：磁器　　B：九谷",class: 'select-button'  %></div>
  <%= form.submit "4.A：土器　　B：有田",class: 'select-button'  %></br>
   <span class='select-message' style='display:none;'>解説</br>
   益子焼は栃木県、常滑焼は愛知県、有田焼は佐賀県</span>
   </div>
<% end %>
</br>
<%= link_to "トップページ", root_path,class: :past__btn  %>
</div>
