// src/SherryPage.js

import React, { useState } from 'react';
import { getSherryPageStyles } from './Styles';
import data from './data.json'

function SherryPage() {

  const styles = getSherryPageStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    const user = data[username];
    if (user && user.password === password) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  const loginSection = (
    <div style={styles.login}>
      <h2>邀请函</h2>
      <p>恭喜你，签到人！<br /> 诚邀开启，城堡之旅。</p>
      <input
        placeholder="签到号"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        冲鸭
      </button>
    </div>
  );

  // Combined state for the Easter Egg inputs
  const [easterEgg, setEasterEgg] = useState({
    birthday: '',
    age: '',
    name: '',
    identity: '', // New field for S's true identity
    isBirthdayCorrect: true,
    isAgeCorrect: true,
    isNameCorrect: true,
    isIdentityCorrect: true, // Validation flag for identity
    isEasterEggCorrect: false
  });

  const handleEasterEggChange = (field, value) => {
    setEasterEgg({
      ...easterEgg,
      [field]: value,
      [`is${field.charAt(0).toUpperCase() + field.slice(1)}Correct`]: true,
    });
  };

  const handleEasterEggSubmit = () => {
    const isBirthdayValid = easterEgg.birthday === "06/20";
    const isAgeValid = easterEgg.age === "18";
    const isNameValid = easterEgg.name === "刘珺";
    const isIdentityValid = easterEgg.identity === "小仙女";

    setEasterEgg({
      ...easterEgg,
      isBirthdayCorrect: isBirthdayValid,
      isAgeCorrect: isAgeValid,
      isNameCorrect: isNameValid,
      isIdentityCorrect: isIdentityValid, // Set validation for identity
      isEasterEggCorrect: isBirthdayValid && isAgeValid && isNameValid && isIdentityValid,
    });
  };

  const easterEggSection = (
    <div style={styles.easterEggContainer}>
      <h2>神秘的彩蛋</h2>
      <p>希望你已经了解到了S的一些线索，试试看，能解开它吗</p>
      <div>
        <input
          type="text"
          placeholder="S的中文全名"
          value={easterEgg.name}
          onChange={(e) => handleEasterEggChange('name', e.target.value)}
          style={styles.input}
        />
        {!easterEgg.isNameCorrect && <p style={styles.errorText}>你竟然不知道她的名字！</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="S的生日 (DD/MM)"
          value={easterEgg.birthday}
          onChange={(e) => handleEasterEggChange('birthday', e.target.value)}
          style={styles.input}
        />
        {!easterEgg.isBirthdayCorrect && <p style={styles.errorText}>可惜，她的真实生日不是这一天。</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="S的年龄"
          value={easterEgg.age}
          onChange={(e) => handleEasterEggChange('age', e.target.value)}
          style={styles.input}
        />
        {!easterEgg.isAgeCorrect && <p style={styles.errorText}>你确定吗，再猜猜看她多少岁。</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="S的真实身份"
          value={easterEgg.identity}
          onChange={(e) => handleEasterEggChange('identity', e.target.value)}
          style={styles.input}
        />
        {!easterEgg.isIdentityCorrect && <p style={styles.errorText}>仙女可不喜欢做这种工作！</p>}
      </div>
      <button onClick={handleEasterEggSubmit} style={styles.button}>
        砸开彩蛋！
      </button>
      {easterEgg.isEasterEggCorrect && (
        <div style={styles.easterEggContent}>
          <h3>恭喜！</h3>
          <p>
            你成功解开了彩蛋！你绝对是了解S的好朋友。S希望跟你分享一个关于宝藏的秘密。
          </p>
          <p>
            S从小希望做一个事业有成的小仙女。她喜欢一切美好、精致、优雅的事物，喜欢圆滚滚的小猫，
            喜欢粉色的花海，喜欢温暖的午后阳光，喜欢小巧的茶具，喜欢像星星一样的宝石。
          </p>
          <p>
            S希望和大家分享她所喜欢的美好事物。在最近夜以继日准备、协调、统筹之下，S打造了自己的小品牌 -
            <strong><a href="https://shibeljewelryboutique.com/" target="_blank" rel="noopener noreferrer">希贝尓珠宝</a></strong>。
            在S的理念里，希贝尓珠宝是accessible luxury，是定制的、拥有完美工艺的宝石。S与柘城De Beers供应商达成培育钻石小批量合作，
            在老家苏州建立了设计、代加工团队，于5月开始试水了少量订单，反馈良好。
          </p>
          <p>
            今天借S生日之际，希贝尓珠宝正式问世啦。你将有机会在抽奖和积分挑战中，获得希贝尓珠宝的小礼物。希望大家多多支持，
            <a href="https://www.instagram.com/shibel_jewelry.official/" target="_blank" rel="noopener noreferrer">点赞关注</a>。
          </p>
          <p>
            最后，请允许和M一起，祝S小仙女生日快乐。
          </p>
        </div>
      )}
    </div>
  );

  const userData = data[username];

  return (
    <div style={styles.container}>
      {!isAuthenticated ? loginSection : (
        <div style={styles.mainContent}>
          <h1>The S Party</h1>
          <h2>背景介绍</h2>
          <p>
            你好，欢迎来到Mt Eden城堡的春夏聚会。我是帮你的I人朋友S代笔的人工智能M。感谢你们从百忙之中，不远千里赶来。
            你是S值得信赖的伙伴。S在此地遗失了一些神秘宝藏，或许你可以和伙伴一起合作，依据下面这些残存的线索，看看有什么进展。
            注意，每个人的线索都是独一无二的。
          </p>
          <h2>Part 1: 关于身份</h2>
          <p>
            客人编号<strong>{username}</strong>, 你的真实身份是<strong>{userData.identity}</strong>。
            你跟其他人一样，都是家喻户晓古今中外的名人。可是，湾区这地方充满坏人，你需要隐藏自己的身份，并通过提问打探其他人的身份。
            关于身份，你只能询问别人答案为“是”或“否”的问题，并需要对别人的问题，提供正确的“是“或”否”作为答案。
            根据这些线索，如果你识破了其他人的真实身份，请对方的身份和编号一起发给M的微信，你将获得5分/人的积分。
          </p>
          <h2>Part 2: 寻找同伴</h2>
          <p>
            今天来此处的宾客，可谓是各个藏龙卧虎，身怀绝技。请你一探究竟。对以下每一个特征，分别找到对应的宾客编号。
            全部找到后，将五个对应宾客编号发到S生日微信群（仅五组数字），你将获得30分的积分。越早完成会有越多的bonus；
            若未能在结束前完成，则将只能按比例获得部分积分或者0分。
          </p>
          <ul>
            {userData.traits.map((trait, index) => (
              <li key={index} style={styles.traitItem}>{trait}</li>
            ))}
          </ul>
          <h2>Part 3: 行动起来</h2>
          <p>
            和新老朋友们一起快乐活动吧。完成任意一项可以获得10个积分。最先完成五个的客人，经M验证后，可以指定其他任意编号“真心话/大冒险”。
          </p>
          <ul>
            {userData.activities.map((activity, index) => (
              <li key={index} style={styles.traitItem}>{activity}</li>
            ))}
          </ul>
          {easterEggSection}
          <h2>注意事项</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>希望大家玩的开心！</li>
            <li style={styles.listItem}>诚信玩家财运亨通，福星高照</li>
            <li style={styles.listItem}>活动内容均由AI生成，包括本网站。不足处多多包涵。</li>
            <li style={styles.listItem}>有任何问题，请联系M (微信群内名字为懋)。</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SherryPage;
