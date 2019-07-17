-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 17, 2019 at 03:23 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `checkpoint`
--

-- --------------------------------------------------------

--
-- Table structure for table `console`
--

CREATE TABLE `console` (
  `console_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `console`
--

INSERT INTO `console` (`console_id`, `name`) VALUES
(1, 'super nintendo'),
(2, 'nintendo nes');

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `game_id` int(11) NOT NULL,
  `console_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `rating` double DEFAULT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`game_id`, `console_id`, `name`, `content`, `rating`, `image`) VALUES
(45, 1, 'The Legend of Zelda : A Link to the Past', 'La princesse Zelda a été faite prisonnière, seul Link a le courage nécessaire pour sauver Hyrule! Cet épisode mythique de la saga est célèbre pour ses graphismes, sa bande sonore, ses donjons ingénieux et ses nouveaux objets tels que le grappin, les bottes de Pégase et la fameuse Excalibur!', NULL, 'http://image.jeuxvideo.com/images/sn/l/o/lozpsn0f.jpg'),
(46, 1, 'Super Mario World', 'Dans Super Mario World, les deux plombiers combattent Bowser et ses sbires dans des niveaux démentiels qui grouillent de secrets. Chevauchez votre nouveau compagnon, Yoshi, pour gober vos ennemis, et envolez vous vers les sommets grâce à la Plume.', NULL, 'http://image.jeuxvideo.com/images/sn/s/m/smwosn0f.jpg'),
(47, 1, 'Donkey Kong Country', 'Jeu de plateformes dans lequel le joueur incarne Donkey et Diddy Kong dont la quête est d\'unir leurs forces afin de retrouver leur stock de bananes.', NULL, 'http://image.jeuxvideo.com/images/sn/d/k/dkcosn0f.jpg'),
(48, 1, 'Chrono Trigger', 'Suite aux dysfonctionnements d\'un système de téléportation durant la Fête du Millénaire, une jeune fille devient prisonnière d\'un enchevêtrement de dangers situés dans le passé et dans le présent. Le jeune Chrono décide de partir à sa rescousse.\n\nEcrire une critique\n', NULL, 'http://image.jeuxvideo.com/images/sn/c/h/chtrsn0f.jpg'),
(49, 1, 'Super Castlevania IV', 'Après un siècle de paix, l\'ombre du mal s\'abat à nouveau sur la Transylvanie. Le comte Dracula est de retour et cette fois, il a gravé votre nom sur une pierre tombale, Simon Belmont! Traversez le sinistre château, équipé de votre fouet ultra maniable, et anéantissez les démons.', NULL, 'http://image.jeuxvideo.com/images/sn/s/c/scv4sn0f.jpg'),
(50, 1, 'Secret of Mana', 'Suivez les aventures d\'un garçon chassé de son village car accusé à tort d\'une agression après avoir rapporté une épée trouvée près d\'une cascade.', NULL, 'http://image.jeuxvideo.com/images/sn/s/o/som1sn0f.jpg'),
(51, 1, 'Star Wing', 'Vous piloterez les nouveaux vaisseaux de la Star Fox, les Arwing, pour défendre le système planétaire Lylat contre l\'Empereur Andross.', NULL, 'http://image.jeuxvideo.com/images/sn/s/t/stfxsn0f.jpg'),
(53, 1, 'Mega Man X', 'Jeu d\'action et de plate-forme. Mega Man X reprend du service lorsque des fouilles permettent aux robots de redevenir violents et de semer la terreur.', NULL, 'http://image.jeuxvideo.com/images/sn/m/e/megxsn0f.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `game-genre`
--

CREATE TABLE `game-genre` (
  `game_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `game_alternative`
--

CREATE TABLE `game_alternative` (
  `id` int(11) NOT NULL,
  `alternative_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_alternative`
--

INSERT INTO `game_alternative` (`id`, `alternative_id`, `game_id`) VALUES
(1, 45, 46),
(2, 46, 47),
(3, 47, 46),
(4, 48, 46),
(5, 49, 46),
(17, 53, 46);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `genre_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`genre_id`, `name`) VALUES
(1, 'action'),
(2, 'aventure');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `console`
--
ALTER TABLE `console`
  ADD PRIMARY KEY (`console_id`);

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`game_id`),
  ADD KEY `console_id` (`console_id`);

--
-- Indexes for table `game-genre`
--
ALTER TABLE `game-genre`
  ADD PRIMARY KEY (`game_id`),
  ADD KEY `genre-game` (`genre_id`);

--
-- Indexes for table `game_alternative`
--
ALTER TABLE `game_alternative`
  ADD PRIMARY KEY (`id`),
  ADD KEY `game_id` (`game_id`),
  ADD KEY `alternative_id` (`alternative_id`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `console`
--
ALTER TABLE `console`
  MODIFY `console_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `game_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `game_alternative`
--
ALTER TABLE `game_alternative`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `game_ibfk_1` FOREIGN KEY (`console_id`) REFERENCES `console` (`console_id`);

--
-- Constraints for table `game-genre`
--
ALTER TABLE `game-genre`
  ADD CONSTRAINT `game-genre_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`),
  ADD CONSTRAINT `genre-game` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`genre_id`);

--
-- Constraints for table `game_alternative`
--
ALTER TABLE `game_alternative`
  ADD CONSTRAINT `game_alternative_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`),
  ADD CONSTRAINT `game_alternative_ibfk_2` FOREIGN KEY (`alternative_id`) REFERENCES `game` (`game_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
