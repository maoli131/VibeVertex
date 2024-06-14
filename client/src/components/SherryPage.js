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
      <p>恭喜你，签到人！诚邀开启，城堡之旅。</p>
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
            和新老朋友们一起快乐活动吧。完成任意一项可以获得10个积分。最先完成五个的客人可以指定其他任意编号“真心话/大冒险”。
          </p>
          <ul>
            {userData.activities.map((activity, index) => (
              <li key={index} style={styles.traitItem}>{activity}</li>
            ))}
          </ul>

          <h2>注意事项</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>诚信玩家财运亨通，福星高照</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SherryPage;
