-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 21, 2021 at 05:20 AM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `blank-iian-ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `access_token`
--

CREATE TABLE `access_token` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `access_token`
--

INSERT INTO `access_token` (`id`, `user_id`, `token`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(34, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMDQyNjE1NywiZXhwIjoxNjEwNTEyNTU3fQ.uOBx1OyMpgBIeIwc03uNhwsg4zMxFMM-RaSZF3MXhMc', NULL, '2021-01-12 11:35:57', NULL, NULL, NULL),
(35, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMTE1ODA3NywiZXhwIjoxNjExMjQ0NDc3fQ.fCSbhAWA6-TAjCKFWo9hjpzJxD3td5r50NjIwTSnOM8', NULL, '2021-01-20 22:54:37', NULL, NULL, NULL),
(36, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMTE1ODIzNywiZXhwIjoxNjExMjQ0NjM3fQ.eSBj3qoq5d0CEP7HsxDUFMD1KRXxpGlz3NMZMvvJD-A', NULL, '2021-01-20 22:57:17', NULL, NULL, NULL),
(37, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMTE1ODI0NCwiZXhwIjoxNjExMjQ0NjQ0fQ.CSK0K19ajOgaeCvoOVb5fDdNy36kJBrr8mTuQFhDXy8', NULL, '2021-01-20 22:57:24', NULL, NULL, NULL),
(38, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMTE1OTUyMywiZXhwIjoxNjExMjQ1OTIzfQ.fB6bPWqrPzDnmCrgZ8lmxfz5v4Zn1j7YiuQdPFgBx4c', NULL, '2021-01-20 23:18:43', NULL, NULL, NULL),
(39, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMTE2MjU1NCwiZXhwIjoxNjExMjQ4OTU0fQ.sU0ZAlZzXcPMEv3a8DH50B9rPMrzoeD5lNrYjeX6250', NULL, '2021-01-21 00:09:14', NULL, NULL, NULL),
(40, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMTE2MjU2NCwiZXhwIjoxNjExMjQ4OTY0fQ.GZCVbBT0O_oEM1E6p7GoFod5c_6JxpPXcpGCbFSUiY0', NULL, '2021-01-21 00:09:24', NULL, NULL, NULL),
(41, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMTE2MjU4MSwiZXhwIjoxNjExMjQ4OTgxfQ.7HgcWDOGIXuT5Cor-2EDApcTz91RZLtLUgvmfx0b6CY', NULL, '2021-01-21 00:09:41', NULL, NULL, NULL),
(42, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxMTE2MjYwMCwiZXhwIjoxNjExMjQ5MDAwfQ.Ex_PMfRCeyfnRIiH_5yUQg96U12xUm_UJOzGYNQOKAM', NULL, '2021-01-21 00:10:00', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `first_name` varchar(32) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `company` varchar(32) DEFAULT NULL,
  `password` varchar(512) DEFAULT NULL,
  `address_1` varchar(128) DEFAULT NULL,
  `address_2` varchar(128) DEFAULT NULL,
  `postcode` varchar(10) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `address_type` int(11) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `phone_no` bigint(20) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sort_order` varchar(255) DEFAULT NULL,
  `url` tinytext,
  `banner_group_id` int(11) DEFAULT '0',
  `container_name` varchar(255) DEFAULT NULL,
  `view_page_count` int(11) DEFAULT '0',
  `banner_group_banner_group_id` int(11) DEFAULT '0',
  `link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `content` text,
  `position` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`banner_id`, `title`, `sort_order`, `url`, `banner_group_id`, `container_name`, `view_page_count`, `banner_group_banner_group_id`, `link`, `image`, `image_path`, `content`, `position`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(49, 'Hamleys Super Summer Sale Creative ', NULL, NULL, NULL, NULL, 0, 0, 'www.sample.com', 'Img_1595952898837.jpeg', 'banner/', '', 3, 0, '2019-02-18 03:20:50', '2021-01-21 00:36:31', NULL, NULL),
(50, 'March - CARNIVAL', NULL, NULL, NULL, NULL, 0, 0, 'www.content.com', 'Img_1551872953437.jpeg', 'banner/', '', 8, 1, '2019-02-18 04:12:32', '2021-01-21 00:34:44', NULL, NULL),
(55, 'Toys have landed', NULL, NULL, NULL, NULL, 0, 0, 'www.sample.com', 'Img_1595952812140.jpeg', 'banner/', '', 2, 0, '2019-02-25 06:43:49', '2021-01-21 00:36:38', NULL, NULL),
(69, 'Mobile Offers', NULL, NULL, NULL, NULL, 0, 0, 'www.moboffers.com', 'Img_1551871752833.jpeg', 'banner/', '', 7, 1, '2019-05-09 05:52:57', '2021-01-21 00:34:59', NULL, NULL),
(70, 'The latest toys have arrived!', NULL, NULL, NULL, NULL, 0, 0, 'https://www.sample.com/', 'Img_1595952537950.jpeg', 'banner/', '', 1, 1, '2019-05-09 05:53:40', '2021-01-21 00:35:03', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `banner_group`
--

CREATE TABLE `banner_group` (
  `banner_group_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `banner_image`
--

CREATE TABLE `banner_image` (
  `banner_image_id` int(11) NOT NULL,
  `banner_id` varchar(32) NOT NULL,
  `link` varchar(255) NOT NULL,
  `image` varchar(45) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `banner_image_description`
--

CREATE TABLE `banner_image_description` (
  `banner_image_description_id` int(11) NOT NULL,
  `banner_image_id` int(11) DEFAULT NULL,
  `banner_id` int(11) DEFAULT NULL,
  `title` varchar(4) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `parent_int` int(11) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `is_active` varchar(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`, `image`, `image_path`, `parent_int`, `sort_order`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keyword`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(97, 'Smartphone', '', NULL, 0, 1, 'Smartphone', '', '', '1', NULL, NULL, '2021-01-20 23:14:13', '2021-01-21 10:51:47'),
(98, 'Tablet', '', NULL, 0, 1, 'tablet', 'tablet', 'tablet', '1', NULL, NULL, '2021-01-20 23:15:43', NULL),
(99, 'Camera', '', NULL, 0, 1, '', '', '', '1', NULL, NULL, '2021-01-20 23:16:23', '2021-01-21 09:57:58'),
(100, 'School tools', '', NULL, 0, 1, 'School tools', 'School tools', 'School tools', '1', NULL, NULL, '2021-01-21 10:09:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category_description`
--

CREATE TABLE `category_description` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `meta_description` varchar(65) DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `category_description_id` int(11) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category_path`
--

CREATE TABLE `category_path` (
  `category_path_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `path_id` int(11) DEFAULT NULL,
  `level` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_path`
--

INSERT INTO `category_path` (`category_path_id`, `category_id`, `path_id`, `level`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(15, 98, 98, 0, NULL, NULL, NULL, NULL),
(18, 99, 99, 0, NULL, NULL, NULL, NULL),
(19, 100, 100, 0, NULL, NULL, NULL, NULL),
(21, 97, 97, 0, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `message` text,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `iso_code_2` varchar(2) NOT NULL,
  `iso_code_3` varchar(3) NOT NULL,
  `address_format` text NOT NULL,
  `postcode_required` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `name`, `iso_code_2`, `iso_code_3`, `address_format`, `postcode_required`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(1, 'Afghanistan', 'AF', 'AFG', '', 0, 1, NULL, NULL, NULL, NULL),
(2, 'Albania', 'AL', 'ALB', '', 0, 1, NULL, NULL, NULL, NULL),
(3, 'Algeria', 'DZ', 'DZA', '', 0, 1, NULL, NULL, NULL, NULL),
(4, 'American Samoa', 'AS', 'ASM', '', 0, 1, NULL, NULL, NULL, NULL),
(5, 'Andorra', 'AD', 'AND', '', 0, 1, NULL, NULL, NULL, NULL),
(6, 'Angola', 'AO', 'AGO', '', 0, 1, NULL, NULL, NULL, NULL),
(7, 'Anguilla', 'AI', 'AIA', '', 0, 1, NULL, NULL, NULL, NULL),
(8, 'Antarctica', 'AQ', 'ATA', '', 0, 1, NULL, NULL, NULL, NULL),
(9, 'Antigua and Barbuda', 'AG', 'ATG', '', 0, 1, NULL, NULL, NULL, NULL),
(10, 'Argentina', 'AR', 'ARG', '', 0, 1, NULL, NULL, NULL, NULL),
(11, 'Armenia', 'AM', 'ARM', '', 0, 1, NULL, NULL, NULL, NULL),
(12, 'Aruba', 'AW', 'ABW', '', 0, 1, NULL, NULL, NULL, NULL),
(13, 'Australia', 'AU', 'AUS', '', 0, 1, NULL, NULL, NULL, NULL),
(14, 'Austria', 'AT', 'AUT', '', 0, 1, NULL, NULL, NULL, NULL),
(15, 'Azerbaijan', 'AZ', 'AZE', '', 0, 1, NULL, NULL, NULL, NULL),
(16, 'Bahamas', 'BS', 'BHS', '', 0, 1, NULL, NULL, NULL, NULL),
(17, 'Bahrain', 'BH', 'BHR', '', 0, 1, NULL, NULL, NULL, NULL),
(18, 'Bangladesh', 'BD', 'BGD', '', 0, 1, NULL, NULL, NULL, NULL),
(19, 'Barbados', 'BB', 'BRB', '', 0, 1, NULL, NULL, NULL, NULL),
(20, 'Belarus', 'BY', 'BLR', '', 0, 1, NULL, NULL, NULL, NULL),
(21, 'Belgium', 'BE', 'BEL', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 0, 1, NULL, NULL, NULL, NULL),
(22, 'Belize', 'BZ', 'BLZ', '', 0, 1, NULL, NULL, NULL, NULL),
(23, 'Benin', 'BJ', 'BEN', '', 0, 1, NULL, NULL, NULL, NULL),
(24, 'Bermuda', 'BM', 'BMU', '', 0, 1, NULL, NULL, NULL, NULL),
(25, 'Bhutan', 'BT', 'BTN', '', 0, 1, NULL, NULL, NULL, NULL),
(26, 'Bolivia', 'BO', 'BOL', '', 0, 1, NULL, NULL, NULL, NULL),
(27, 'Bosnia and Herzegovina', 'BA', 'BIH', '', 0, 1, NULL, NULL, NULL, NULL),
(28, 'Botswana', 'BW', 'BWA', '', 0, 1, NULL, NULL, NULL, NULL),
(29, 'Bouvet Island', 'BV', 'BVT', '', 0, 1, NULL, NULL, NULL, NULL),
(30, 'Brazil', 'BR', 'BRA', '', 0, 1, NULL, NULL, NULL, NULL),
(31, 'British Indian Ocean Territory', 'IO', 'IOT', '', 0, 1, NULL, NULL, NULL, NULL),
(32, 'Brunei Darussalam', 'BN', 'BRN', '', 0, 1, NULL, NULL, NULL, NULL),
(33, 'Bulgaria', 'BG', 'BGR', '', 0, 1, NULL, NULL, NULL, NULL),
(34, 'Burkina Faso', 'BF', 'BFA', '', 0, 1, NULL, NULL, NULL, NULL),
(35, 'Burundi', 'BI', 'BDI', '', 0, 1, NULL, NULL, NULL, NULL),
(36, 'Cambodia', 'KH', 'KHM', '', 0, 1, NULL, NULL, NULL, NULL),
(37, 'Cameroon', 'CM', 'CMR', '', 0, 1, NULL, NULL, NULL, NULL),
(38, 'Canada', 'CA', 'CAN', '', 0, 1, NULL, NULL, NULL, NULL),
(39, 'Cape Verde', 'CV', 'CPV', '', 0, 1, NULL, NULL, NULL, NULL),
(40, 'Cayman Islands', 'KY', 'CYM', '', 0, 1, NULL, NULL, NULL, NULL),
(41, 'Central African Republic', 'CF', 'CAF', '', 0, 1, NULL, NULL, NULL, NULL),
(42, 'Chad', 'TD', 'TCD', '', 0, 1, NULL, NULL, NULL, NULL),
(43, 'Chile', 'CL', 'CHL', '', 0, 1, NULL, NULL, NULL, NULL),
(44, 'China', 'CN', 'CHN', '', 0, 1, NULL, NULL, NULL, NULL),
(45, 'Christmas Island', 'CX', 'CXR', '', 0, 1, NULL, NULL, NULL, NULL),
(46, 'Cocos (Keeling) Islands', 'CC', 'CCK', '', 0, 1, NULL, NULL, NULL, NULL),
(47, 'Colombia', 'CO', 'COL', '', 0, 1, NULL, NULL, NULL, NULL),
(48, 'Comoros', 'KM', 'COM', '', 0, 1, NULL, NULL, NULL, NULL),
(49, 'Congo', 'CG', 'COG', '', 0, 1, NULL, NULL, NULL, NULL),
(50, 'Cook Islands', 'CK', 'COK', '', 0, 1, NULL, NULL, NULL, NULL),
(51, 'Costa Rica', 'CR', 'CRI', '', 0, 1, NULL, NULL, NULL, NULL),
(52, 'Cote D\'Ivoire', 'CI', 'CIV', '', 0, 1, NULL, NULL, NULL, NULL),
(53, 'Croatia', 'HR', 'HRV', '', 0, 1, NULL, NULL, NULL, NULL),
(54, 'Cuba', 'CU', 'CUB', '', 0, 1, NULL, NULL, NULL, NULL),
(55, 'Cyprus', 'CY', 'CYP', '', 0, 1, NULL, NULL, NULL, NULL),
(56, 'Czech Republic', 'CZ', 'CZE', '', 0, 1, NULL, NULL, NULL, NULL),
(57, 'Denmark', 'DK', 'DNK', '', 0, 1, NULL, NULL, NULL, NULL),
(58, 'Djibouti', 'DJ', 'DJI', '', 0, 1, NULL, NULL, NULL, NULL),
(59, 'Dominica', 'DM', 'DMA', '', 0, 1, NULL, NULL, NULL, NULL),
(60, 'Dominican Republic', 'DO', 'DOM', '', 0, 1, NULL, NULL, NULL, NULL),
(61, 'East Timor', 'TL', 'TLS', '', 0, 1, NULL, NULL, NULL, NULL),
(62, 'Ecuador', 'EC', 'ECU', '', 0, 1, NULL, NULL, NULL, NULL),
(63, 'Egypt', 'EG', 'EGY', '', 0, 1, NULL, NULL, NULL, NULL),
(64, 'El Salvador', 'SV', 'SLV', '', 0, 1, NULL, NULL, NULL, NULL),
(65, 'Equatorial Guinea', 'GQ', 'GNQ', '', 0, 1, NULL, NULL, NULL, NULL),
(66, 'Eritrea', 'ER', 'ERI', '', 0, 1, NULL, NULL, NULL, NULL),
(67, 'Estonia', 'EE', 'EST', '', 0, 1, NULL, NULL, NULL, NULL),
(68, 'Ethiopia', 'ET', 'ETH', '', 0, 1, NULL, NULL, NULL, NULL),
(69, 'Falkland Islands (Malvinas)', 'FK', 'FLK', '', 0, 1, NULL, NULL, NULL, NULL),
(70, 'Faroe Islands', 'FO', 'FRO', '', 0, 1, NULL, NULL, NULL, NULL),
(71, 'Fiji', 'FJ', 'FJI', '', 0, 1, NULL, NULL, NULL, NULL),
(72, 'Finland', 'FI', 'FIN', '', 0, 1, NULL, NULL, NULL, NULL),
(74, 'France, Metropolitan', 'FR', 'FRA', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1, NULL, NULL, NULL, NULL),
(75, 'French Guiana', 'GF', 'GUF', '', 0, 1, NULL, NULL, NULL, NULL),
(76, 'French Polynesia', 'PF', 'PYF', '', 0, 1, NULL, NULL, NULL, NULL),
(77, 'French Southern Territories', 'TF', 'ATF', '', 0, 1, NULL, NULL, NULL, NULL),
(78, 'Gabon', 'GA', 'GAB', '', 0, 1, NULL, NULL, NULL, NULL),
(79, 'Gambia', 'GM', 'GMB', '', 0, 1, NULL, NULL, NULL, NULL),
(80, 'Georgia', 'GE', 'GEO', '', 0, 1, NULL, NULL, NULL, NULL),
(81, 'Germany', 'DE', 'DEU', '{company}\r\n{firstname} {lastname}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1, NULL, NULL, NULL, NULL),
(82, 'Ghana', 'GH', 'GHA', '', 0, 1, NULL, NULL, NULL, NULL),
(83, 'Gibraltar', 'GI', 'GIB', '', 0, 1, NULL, NULL, NULL, NULL),
(84, 'Greece', 'GR', 'GRC', '', 0, 1, NULL, NULL, NULL, NULL),
(85, 'Greenland', 'GL', 'GRL', '', 0, 1, NULL, NULL, NULL, NULL),
(86, 'Grenada', 'GD', 'GRD', '', 0, 1, NULL, NULL, NULL, NULL),
(87, 'Guadeloupe', 'GP', 'GLP', '', 0, 1, NULL, NULL, NULL, NULL),
(88, 'Guam', 'GU', 'GUM', '', 0, 1, NULL, NULL, NULL, NULL),
(89, 'Guatemala', 'GT', 'GTM', '', 0, 1, NULL, NULL, NULL, NULL),
(90, 'Guinea', 'GN', 'GIN', '', 0, 1, NULL, NULL, NULL, NULL),
(91, 'Guinea-Bissau', 'GW', 'GNB', '', 0, 1, NULL, NULL, NULL, NULL),
(92, 'Guyana', 'GY', 'GUY', '', 0, 1, NULL, NULL, NULL, NULL),
(93, 'Haiti', 'HT', 'HTI', '', 0, 1, NULL, NULL, NULL, NULL),
(94, 'Heard and Mc Donald Islands', 'HM', 'HMD', '', 0, 1, NULL, NULL, NULL, NULL),
(95, 'Honduras', 'HN', 'HND', '', 0, 1, NULL, NULL, NULL, NULL),
(96, 'Hong Kong', 'HK', 'HKG', '', 0, 1, NULL, NULL, NULL, NULL),
(97, 'Hungary', 'HU', 'HUN', '', 0, 1, NULL, NULL, NULL, NULL),
(98, 'Iceland', 'IS', 'ISL', '', 0, 1, NULL, NULL, NULL, NULL),
(99, 'India', 'IN', 'IND', '', 0, 1, NULL, NULL, NULL, NULL),
(100, 'Indonesia', 'ID', 'IDN', '', 0, 1, NULL, NULL, NULL, NULL),
(101, 'Iran (Islamic Republic of)', 'IR', 'IRN', '', 0, 1, NULL, NULL, NULL, NULL),
(102, 'Iraq', 'IQ', 'IRQ', '', 0, 1, NULL, NULL, NULL, NULL),
(103, 'Ireland', 'IE', 'IRL', '', 0, 1, NULL, NULL, NULL, NULL),
(104, 'Israel', 'IL', 'ISR', '', 0, 1, NULL, NULL, NULL, NULL),
(105, 'Italy', 'IT', 'ITA', '', 0, 1, NULL, NULL, NULL, NULL),
(106, 'Jamaica', 'JM', 'JAM', '', 0, 1, NULL, NULL, NULL, NULL),
(107, 'Japan', 'JP', 'JPN', '', 0, 1, NULL, NULL, NULL, NULL),
(108, 'Jordan', 'JO', 'JOR', '', 0, 1, NULL, NULL, NULL, NULL),
(109, 'Kazakhstan', 'KZ', 'KAZ', '', 0, 1, NULL, NULL, NULL, NULL),
(110, 'Kenya', 'KE', 'KEN', '', 0, 1, NULL, NULL, NULL, NULL),
(111, 'Kiribati', 'KI', 'KIR', '', 0, 1, NULL, NULL, NULL, NULL),
(112, 'North Korea', 'KP', 'PRK', '', 0, 1, NULL, NULL, NULL, NULL),
(113, 'South Korea', 'KR', 'KOR', '', 0, 1, NULL, NULL, NULL, NULL),
(114, 'Kuwait', 'KW', 'KWT', '', 0, 1, NULL, NULL, NULL, NULL),
(115, 'Kyrgyzstan', 'KG', 'KGZ', '', 0, 1, NULL, NULL, NULL, NULL),
(116, 'Lao People\'s Democratic Republic', 'LA', 'LAO', '', 0, 1, NULL, NULL, NULL, NULL),
(117, 'Latvia', 'LV', 'LVA', '', 0, 1, NULL, NULL, NULL, NULL),
(118, 'Lebanon', 'LB', 'LBN', '', 0, 1, NULL, NULL, NULL, NULL),
(119, 'Lesotho', 'LS', 'LSO', '', 0, 1, NULL, NULL, NULL, NULL),
(120, 'Liberia', 'LR', 'LBR', '', 0, 1, NULL, NULL, NULL, NULL),
(121, 'Libyan Arab Jamahiriya', 'LY', 'LBY', '', 0, 1, NULL, NULL, NULL, NULL),
(122, 'Liechtenstein', 'LI', 'LIE', '', 0, 1, NULL, NULL, NULL, NULL),
(123, 'Lithuania', 'LT', 'LTU', '', 0, 1, NULL, NULL, NULL, NULL),
(124, 'Luxembourg', 'LU', 'LUX', '', 0, 1, NULL, NULL, NULL, NULL),
(125, 'Macau', 'MO', 'MAC', '', 0, 1, NULL, NULL, NULL, NULL),
(126, 'FYROM', 'MK', 'MKD', '', 0, 1, NULL, NULL, NULL, NULL),
(127, 'Madagascar', 'MG', 'MDG', '', 0, 1, NULL, NULL, NULL, NULL),
(128, 'Malawi', 'MW', 'MWI', '', 0, 1, NULL, NULL, NULL, NULL),
(129, 'Malaysia', 'MY', 'MYS', '', 0, 1, NULL, NULL, NULL, NULL),
(130, 'Maldives', 'MV', 'MDV', '', 0, 1, NULL, NULL, NULL, NULL),
(131, 'Mali', 'ML', 'MLI', '', 0, 1, NULL, NULL, NULL, NULL),
(132, 'Malta', 'MT', 'MLT', '', 0, 1, NULL, NULL, NULL, NULL),
(133, 'Marshall Islands', 'MH', 'MHL', '', 0, 1, NULL, NULL, NULL, NULL),
(134, 'Martinique', 'MQ', 'MTQ', '', 0, 1, NULL, NULL, NULL, NULL),
(135, 'Mauritania', 'MR', 'MRT', '', 0, 1, NULL, NULL, NULL, NULL),
(136, 'Mauritius', 'MU', 'MUS', '', 0, 1, NULL, NULL, NULL, NULL),
(137, 'Mayotte', 'YT', 'MYT', '', 0, 1, NULL, NULL, NULL, NULL),
(138, 'Mexico', 'MX', 'MEX', '', 0, 1, NULL, NULL, NULL, NULL),
(139, 'Micronesia, Federated States of', 'FM', 'FSM', '', 0, 1, NULL, NULL, NULL, NULL),
(140, 'Moldova, Republic of', 'MD', 'MDA', '', 0, 1, NULL, NULL, NULL, NULL),
(141, 'Monaco', 'MC', 'MCO', '', 0, 1, NULL, NULL, NULL, NULL),
(142, 'Mongolia', 'MN', 'MNG', '', 0, 1, NULL, NULL, NULL, NULL),
(143, 'Montserrat', 'MS', 'MSR', '', 0, 1, NULL, NULL, NULL, NULL),
(144, 'Morocco', 'MA', 'MAR', '', 0, 1, NULL, NULL, NULL, NULL),
(145, 'Mozambique', 'MZ', 'MOZ', '', 0, 1, NULL, NULL, NULL, NULL),
(146, 'Myanmar', 'MM', 'MMR', '', 0, 1, NULL, NULL, NULL, NULL),
(147, 'Namibia', 'NA', 'NAM', '', 0, 1, NULL, NULL, NULL, NULL),
(148, 'Nauru', 'NR', 'NRU', '', 0, 1, NULL, NULL, NULL, NULL),
(149, 'Nepal', 'NP', 'NPL', '', 0, 1, NULL, NULL, NULL, NULL),
(150, 'Netherlands', 'NL', 'NLD', '', 0, 1, NULL, NULL, NULL, NULL),
(151, 'Netherlands Antilles', 'AN', 'ANT', '', 0, 1, NULL, NULL, NULL, NULL),
(152, 'New Caledonia', 'NC', 'NCL', '', 0, 1, NULL, NULL, NULL, NULL),
(153, 'New Zealand', 'NZ', 'NZL', '', 0, 1, NULL, NULL, NULL, NULL),
(154, 'Nicaragua', 'NI', 'NIC', '', 0, 1, NULL, NULL, NULL, NULL),
(155, 'Niger', 'NE', 'NER', '', 0, 1, NULL, NULL, NULL, NULL),
(156, 'Nigeria', 'NG', 'NGA', '', 0, 1, NULL, NULL, NULL, NULL),
(157, 'Niue', 'NU', 'NIU', '', 0, 1, NULL, NULL, NULL, NULL),
(158, 'Norfolk Island', 'NF', 'NFK', '', 0, 1, NULL, NULL, NULL, NULL),
(159, 'Northern Mariana Islands', 'MP', 'MNP', '', 0, 1, NULL, NULL, NULL, NULL),
(160, 'Norway', 'NO', 'NOR', '', 0, 1, NULL, NULL, NULL, NULL),
(161, 'Oman', 'OM', 'OMN', '', 0, 1, NULL, NULL, NULL, NULL),
(162, 'Pakistan', 'PK', 'PAK', '', 0, 1, NULL, NULL, NULL, NULL),
(163, 'Palau', 'PW', 'PLW', '', 0, 1, NULL, NULL, NULL, NULL),
(164, 'Panama', 'PA', 'PAN', '', 0, 1, NULL, NULL, NULL, NULL),
(165, 'Papua New Guinea', 'PG', 'PNG', '', 0, 1, NULL, NULL, NULL, NULL),
(166, 'Paraguay', 'PY', 'PRY', '', 0, 1, NULL, NULL, NULL, NULL),
(167, 'Peru', 'PE', 'PER', '', 0, 1, NULL, NULL, NULL, NULL),
(168, 'Philippines', 'PH', 'PHL', '', 0, 1, NULL, NULL, NULL, NULL),
(169, 'Pitcairn', 'PN', 'PCN', '', 0, 1, NULL, NULL, NULL, NULL),
(170, 'Poland', 'PL', 'POL', '', 0, 1, NULL, NULL, NULL, NULL),
(171, 'Portugal', 'PT', 'PRT', '', 0, 1, NULL, NULL, NULL, NULL),
(172, 'Puerto Rico', 'PR', 'PRI', '', 0, 1, NULL, NULL, NULL, NULL),
(173, 'Qatar', 'QA', 'QAT', '', 0, 1, NULL, NULL, NULL, NULL),
(174, 'Reunion', 'RE', 'REU', '', 0, 1, NULL, NULL, NULL, NULL),
(175, 'Romania', 'RO', 'ROM', '', 0, 1, NULL, NULL, NULL, NULL),
(176, 'Russian Federation', 'RU', 'RUS', '', 0, 1, NULL, NULL, NULL, NULL),
(177, 'Rwanda', 'RW', 'RWA', '', 0, 1, NULL, NULL, NULL, NULL),
(178, 'Saint Kitts and Nevis', 'KN', 'KNA', '', 0, 1, NULL, NULL, NULL, NULL),
(179, 'Saint Lucia', 'LC', 'LCA', '', 0, 1, NULL, NULL, NULL, NULL),
(180, 'Saint Vincent and the Grenadines', 'VC', 'VCT', '', 0, 1, NULL, NULL, NULL, NULL),
(181, 'Samoa', 'WS', 'WSM', '', 0, 1, NULL, NULL, NULL, NULL),
(182, 'San Marino', 'SM', 'SMR', '', 0, 1, NULL, NULL, NULL, NULL),
(183, 'Sao Tome and Principe', 'ST', 'STP', '', 0, 1, NULL, NULL, NULL, NULL),
(184, 'Saudi Arabia', 'SA', 'SAU', '', 0, 1, NULL, NULL, NULL, NULL),
(185, 'Senegal', 'SN', 'SEN', '', 0, 1, NULL, NULL, NULL, NULL),
(186, 'Seychelles', 'SC', 'SYC', '', 0, 1, NULL, NULL, NULL, NULL),
(187, 'Sierra Leone', 'SL', 'SLE', '', 0, 1, NULL, NULL, NULL, NULL),
(188, 'Singapore', 'SG', 'SGP', '', 0, 1, NULL, NULL, NULL, NULL),
(189, 'Slovak Republic', 'SK', 'SVK', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{city} {postcode}\r\n{zone}\r\n{country}', 0, 1, NULL, NULL, NULL, NULL),
(190, 'Slovenia', 'SI', 'SVN', '', 0, 1, NULL, NULL, NULL, NULL),
(191, 'Solomon Islands', 'SB', 'SLB', '', 0, 1, NULL, NULL, NULL, NULL),
(192, 'Somalia', 'SO', 'SOM', '', 0, 1, NULL, NULL, NULL, NULL),
(193, 'South Africa', 'ZA', 'ZAF', '', 0, 1, NULL, NULL, NULL, NULL),
(194, 'South Georgia &amp; South Sandwich Islands', 'GS', 'SGS', '', 0, 1, NULL, NULL, NULL, NULL),
(195, 'Spain', 'ES', 'ESP', '', 0, 1, NULL, NULL, NULL, NULL),
(196, 'Sri Lanka', 'LK', 'LKA', '', 0, 1, NULL, NULL, NULL, NULL),
(197, 'St. Helena', 'SH', 'SHN', '', 0, 1, NULL, NULL, NULL, NULL),
(198, 'St. Pierre and Miquelon', 'PM', 'SPM', '', 0, 1, NULL, NULL, NULL, NULL),
(199, 'Sudan', 'SD', 'SDN', '', 0, 1, NULL, NULL, NULL, NULL),
(200, 'Suriname', 'SR', 'SUR', '', 0, 1, NULL, NULL, NULL, NULL),
(201, 'Svalbard and Jan Mayen Islands', 'SJ', 'SJM', '', 0, 1, NULL, NULL, NULL, NULL),
(202, 'Swaziland', 'SZ', 'SWZ', '', 0, 1, NULL, NULL, NULL, NULL),
(203, 'Sweden', 'SE', 'SWE', '{company}\r\n{firstname} {lastname}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1, NULL, NULL, NULL, NULL),
(204, 'Switzerland', 'CH', 'CHE', '', 0, 1, NULL, NULL, NULL, NULL),
(205, 'Syrian Arab Republic', 'SY', 'SYR', '', 0, 1, NULL, NULL, NULL, NULL),
(206, 'Taiwan', 'TW', 'TWN', '', 0, 1, NULL, NULL, NULL, NULL),
(207, 'Tajikistan', 'TJ', 'TJK', '', 0, 1, NULL, NULL, NULL, NULL),
(208, 'Tanzania, United Republic of', 'TZ', 'TZA', '', 0, 1, NULL, NULL, NULL, NULL),
(209, 'Thailand', 'TH', 'THA', '', 0, 1, NULL, NULL, NULL, NULL),
(210, 'Togo', 'TG', 'TGO', '', 0, 1, NULL, NULL, NULL, NULL),
(211, 'Tokelau', 'TK', 'TKL', '', 0, 1, NULL, NULL, NULL, NULL),
(212, 'Tonga', 'TO', 'TON', '', 0, 1, NULL, NULL, NULL, NULL),
(213, 'Trinidad and Tobago', 'TT', 'TTO', '', 0, 1, NULL, NULL, NULL, NULL),
(214, 'Tunisia', 'TN', 'TUN', '', 0, 1, NULL, NULL, NULL, NULL),
(215, 'Turkey', 'TR', 'TUR', '', 0, 1, NULL, NULL, NULL, NULL),
(216, 'Turkmenistan', 'TM', 'TKM', '', 0, 1, NULL, NULL, NULL, NULL),
(217, 'Turks and Caicos Islands', 'TC', 'TCA', '', 0, 1, NULL, NULL, NULL, NULL),
(218, 'Tuvalu', 'TV', 'TUV', '', 0, 1, NULL, NULL, NULL, NULL),
(219, 'Uganda', 'UG', 'UGA', '', 0, 1, NULL, NULL, NULL, NULL),
(220, 'Ukraine', 'UA', 'UKR', '', 0, 1, NULL, NULL, NULL, NULL),
(221, 'United Arab Emirates', 'AE', 'ARE', '', 0, 1, NULL, NULL, NULL, NULL),
(222, 'United Kingdom', 'GB', 'GBR', '', 1, 1, NULL, NULL, NULL, NULL),
(223, 'United States', 'US', 'USA', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{city}, {zone} {postcode}\r\n{country}', 0, 1, NULL, NULL, NULL, NULL),
(224, 'United States Minor Outlying Islands', 'UM', 'UMI', '', 0, 1, NULL, NULL, NULL, NULL),
(225, 'Uruguay', 'UY', 'URY', '', 0, 1, NULL, NULL, NULL, NULL),
(226, 'Uzbekistan', 'UZ', 'UZB', '', 0, 1, NULL, NULL, NULL, NULL),
(227, 'Vanuatu', 'VU', 'VUT', '', 0, 1, NULL, NULL, NULL, NULL),
(228, 'Vatican City State (Holy See)', 'VA', 'VAT', '', 0, 1, NULL, NULL, NULL, NULL),
(229, 'Venezuela', 'VE', 'VEN', '', 0, 1, NULL, NULL, NULL, NULL),
(230, 'Viet Nam', 'VN', 'VNM', '', 0, 1, NULL, NULL, NULL, NULL),
(231, 'Virgin Islands (British)', 'VG', 'VGB', '', 0, 1, NULL, NULL, NULL, NULL),
(232, 'Virgin Islands (U.S.)', 'VI', 'VIR', '', 0, 1, NULL, NULL, NULL, NULL),
(233, 'Wallis and Futuna Islands', 'WF', 'WLF', '', 0, 1, NULL, NULL, NULL, NULL),
(234, 'Western Sahara', 'EH', 'ESH', '', 0, 1, NULL, NULL, NULL, NULL),
(235, 'Yemen', 'YE', 'YEM', '', 0, 1, NULL, NULL, NULL, NULL),
(237, 'Democratic Republic of Congo', 'CD', 'COD', '', 0, 1, NULL, NULL, NULL, NULL),
(238, 'Zambia', 'ZM', 'ZMB', '', 0, 1, NULL, NULL, NULL, NULL),
(239, 'Zimbabwe', 'ZW', 'ZWE', '', 0, 1, NULL, NULL, NULL, NULL),
(242, 'Montenegro', 'ME', 'MNE', '', 0, 1, NULL, NULL, NULL, NULL),
(243, 'Serbia', 'RS', 'SRB', '', 0, 1, NULL, NULL, NULL, NULL),
(244, 'Aaland Islands', 'AX', 'ALA', '', 0, 1, NULL, NULL, NULL, NULL),
(245, 'Bonaire, Sint Eustatius and Saba', 'BQ', 'BES', '', 0, 1, NULL, NULL, NULL, NULL),
(246, 'Curacao', 'CW', 'CUW', '', 0, 1, NULL, NULL, NULL, NULL),
(247, 'Palestinian Territory, Occupied', 'PS', 'PSE', '', 0, 1, NULL, NULL, NULL, NULL),
(248, 'South Sudan', 'SS', 'SSD', '', 0, 1, NULL, NULL, NULL, NULL),
(249, 'St. Barthelemy', 'BL', 'BLM', '', 0, 1, NULL, NULL, NULL, NULL),
(250, 'St. Martin (French part)', 'MF', 'MAF', '', 0, 1, NULL, NULL, NULL, NULL),
(251, 'Canary Islands', 'IC', 'ICA', '', 0, 1, NULL, NULL, NULL, NULL),
(252, 'Ascension Island (British)', 'AC', 'ASC', '', 0, 1, NULL, NULL, NULL, NULL),
(253, 'Kosovo, Republic of', 'XK', 'UNK', '', 0, 1, NULL, NULL, NULL, NULL),
(254, 'Isle of Man', 'IM', 'IMN', '', 0, 1, NULL, NULL, NULL, NULL),
(255, 'Tristan da Cunha', 'TA', 'SHN', '', 0, 1, NULL, NULL, NULL, NULL),
(256, 'Guernsey', 'GG', 'GGY', '', 0, 1, NULL, NULL, NULL, NULL),
(257, 'Jersey', 'JE', 'JEY', '', 0, 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `first_name` varchar(512) DEFAULT NULL,
  `last_name` varchar(512) DEFAULT NULL,
  `username` varchar(512) NOT NULL,
  `email` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `pincode` varchar(6) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `avatar_path` tinytext,
  `mail_status` int(11) DEFAULT NULL,
  `delete_flag` int(11) DEFAULT '0',
  `customer_group_id` int(11) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `newsletter` int(11) DEFAULT NULL,
  `safe` int(11) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `local` varchar(255) DEFAULT NULL,
  `oauth_data` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `first_name`, `last_name`, `username`, `email`, `password`, `mobile`, `address`, `country_id`, `city`, `pincode`, `avatar`, `avatar_path`, `mail_status`, `delete_flag`, `customer_group_id`, `last_login`, `newsletter`, `safe`, `ip`, `zone_id`, `local`, `oauth_data`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(6, 'Lam Van Hung', NULL, 'lamhung@storefront.com', 'lamhung@storefront.com', '$2b$10$T8wFs0oI6UZDtiQ0vOl45.HsscGgN.np8qFFwcBhHjMiwyQWpVLw.', '0123456789', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2021-01-21 00:48:38', NULL, NULL, '::1', NULL, NULL, NULL, 1, NULL, NULL, '2021-01-21 00:48:00', '2021-01-21 00:48:38'),
(7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', '$2b$10$PlMNtvdRJBpPl8pA4r6e3u3HzqL0FSLyNjCIGbiMBEVpd3Qzsz6Sq', '01123456', NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 1, '2021-01-21 09:50:06', 1, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2021-01-21 09:20:34', '2021-01-21 09:50:06');

-- --------------------------------------------------------

--
-- Table structure for table `customer_group`
--

CREATE TABLE `customer_group` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_ip`
--

CREATE TABLE `customer_ip` (
  `customer_ip_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_transaction`
--

CREATE TABLE `customer_transaction` (
  `customer_transaction_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `description` text,
  `amount` decimal(15,4) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_wishlist`
--

CREATE TABLE `customer_wishlist` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_wishlist`
--

INSERT INTO `customer_wishlist` (`id`, `customer_id`, `product_id`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 7, 1, 1, NULL, NULL, '2021-01-21 10:34:43', NULL),
(2, 7, 293, 1, NULL, NULL, '2021-01-21 11:44:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `email_template`
--

CREATE TABLE `email_template` (
  `id` int(11) NOT NULL,
  `shortname` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email_template`
--

INSERT INTO `email_template` (`id`, `shortname`, `subject`, `message`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(1, 'Register Content', 'Registration Successfully', '<p>Dear {name},</p>\n\n<p>Thank you for expressing your interest and registering with us, the faster roadway for a smarter eCommerce drive.</p>\n', 1, '2019-02-23 09:47:35', '2021-01-12 11:42:01', NULL, NULL),
(2, 'Forgot Password Content', 'Forgot Password', '<p>Dear {name},<br />\n&nbsp;</p>\n\n<p>Your new Password is : {xxxxxx}</p>\n', 1, '2019-02-23 09:53:09', '2019-03-06 01:06:45', NULL, NULL),
(3, 'Contact Content', 'ContactUs', '<p>Dear Admin,<br />\n&nbsp;</p>\n\n<p>You just received an enquiry from {name} and the details are here:<br />\nDetails:<br />\nEmail : {email},<br />\nPhone Number : {phoneNumber},<br />\nMessage : {message}.</p>\n', 1, NULL, '2021-01-12 11:40:51', NULL, NULL),
(4, 'Create Customer Login', 'User Login', '<p>Dear {name},<br />\n&nbsp;</p>\n\n<p>We are glad to inform you that eCommerce has added you as Customer.Here are your User Credentials for logging into the Application</p>\n\n<p>User ID : {username}</p>\n\n<p>Password : {password}</p>\n\n<p>&nbsp;</p>\n\n<p>You may login using the above Email Id and Password.</p>\n\n<p>&nbsp;</p>\n', 0, NULL, '2021-01-21 11:08:57', NULL, NULL),
(5, 'Customer Order Content', 'Details of your recent Order', 'Dear {name},        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> Order successfully placed.        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> You have successfully placed an order for customization services. Kindly find the following details on the placed order.    </tr></tbody></table></td></tr>\r\n', 0, NULL, '2019-03-05 07:04:07', NULL, NULL),
(6, 'Admin Mail Content', 'Congratulations on your recent order', '<p>Dear Mr Admin,<br />\nA new order has been placed.<br />\nThe new order {orderId} from the Customer {name} has been successfully placed.<br />\nKindly find the following details on the placed order.</p>\n', 0, NULL, '2021-01-21 11:09:11', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `geo_zone`
--

CREATE TABLE `geo_zone` (
  `geo_zone_id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `language_id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `code` varchar(5) DEFAULT NULL,
  `image` text,
  `image_path` text,
  `locale` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`language_id`, `name`, `code`, `image`, `image_path`, `locale`, `sort_order`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(57, 'English', 'ENG', 'Img_1557133081101.png', 'language/', NULL, 1, 1, '2019-05-06 03:58:01', '2019-05-15 18:40:53', NULL, NULL),
(58, 'French', 'FR', 'Img_1557569207176.png', 'language/', NULL, 1, 1, '2019-05-06 06:57:05', '2019-05-10 04:11:21', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `login_log`
--

CREATE TABLE `login_log` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login_log`
--

INSERT INTO `login_log` (`id`, `customer_id`, `email_id`, `first_name`, `ip_address`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(575, 6, 'lamhung@storefront.com', 'Lam Van Hung', '::1', '2021-01-21 00:48:38', NULL, NULL, NULL),
(576, 7, 'lamhung.nuce01@gmail.com', 'lamhung nuce', '::1', '2021-01-21 09:50:06', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer`
--

CREATE TABLE `manufacturer` (
  `manufacturer_id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `sort_order` int(3) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufacturer`
--

INSERT INTO `manufacturer` (`manufacturer_id`, `name`, `image`, `image_path`, `sort_order`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(97, 'XiaoMi', 'Img_1611168868276.png', 'manufacturer/', 1, 1, NULL, NULL, '2021-01-21 01:54:28', NULL),
(98, 'Huawei', 'Img_1611168941835.jpeg', 'manufacturer/', 1, 1, NULL, NULL, '2021-01-21 01:55:41', NULL),
(99, 'Apple', 'Img_1611169004442.png', 'manufacturer/', 1, 1, NULL, NULL, '2021-01-21 01:56:44', NULL),
(100, 'Microsoft', 'Img_1611169091341.png', 'manufacturer/', 1, 1, NULL, NULL, '2021-01-21 01:58:11', NULL),
(101, 'STEM', 'Img_1611199204083.jpeg', 'manufacturer/', 1, 1, NULL, NULL, '2021-01-21 10:20:04', NULL),
(102, 'Canon', 'Img_1611202944369.png', 'manufacturer/', 1, 1, NULL, NULL, '2021-01-21 11:22:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `option`
--

CREATE TABLE `option` (
  `option_id` int(11) NOT NULL,
  `type` varchar(32) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `option_description`
--

CREATE TABLE `option_description` (
  `option_description_id` int(11) NOT NULL,
  `option_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `option_value`
--

CREATE TABLE `option_value` (
  `option_value_id` int(11) NOT NULL,
  `option_id` int(11) DEFAULT NULL,
  `image` text,
  `image_path` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `option_value_description`
--

CREATE TABLE `option_value_description` (
  `option_value_description_id` int(11) NOT NULL,
  `option_value_id` int(11) DEFAULT NULL,
  `option_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `currency_id` int(11) DEFAULT NULL,
  `shipping_zone_id` int(11) DEFAULT NULL,
  `payment_zone_id` int(11) DEFAULT NULL,
  `shipping_country_id` int(11) DEFAULT NULL,
  `payment_country_id` int(11) DEFAULT NULL,
  `invoice_no` varchar(45) DEFAULT NULL,
  `invoice_prefix` varchar(45) DEFAULT NULL,
  `order_prefix_id` varchar(255) DEFAULT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `email` varchar(96) DEFAULT NULL,
  `telephone` varchar(32) DEFAULT NULL,
  `fax` varchar(32) DEFAULT NULL,
  `shipping_firstname` varchar(32) DEFAULT NULL,
  `shipping_lastname` varchar(32) DEFAULT NULL,
  `shipping_company` varchar(32) DEFAULT NULL,
  `shipping_address_1` varchar(128) DEFAULT NULL,
  `shipping_address_2` varchar(128) DEFAULT NULL,
  `shipping_city` varchar(128) DEFAULT NULL,
  `shipping_postcode` varchar(10) DEFAULT NULL,
  `shipping_country` varchar(128) DEFAULT NULL,
  `shipping_zone` varchar(128) DEFAULT NULL,
  `shipping_address_format` text,
  `shipping_method` varchar(128) DEFAULT NULL,
  `payment_firstname` varchar(32) DEFAULT NULL,
  `payment_lastname` varchar(32) DEFAULT NULL,
  `payment_company` varchar(32) DEFAULT NULL,
  `payment_address_1` varchar(128) DEFAULT NULL,
  `payment_address_2` varchar(128) DEFAULT NULL,
  `payment_city` varchar(128) DEFAULT NULL,
  `payment_postcode` varchar(10) DEFAULT NULL,
  `payment_country` varchar(128) DEFAULT NULL,
  `payment_zone` varchar(128) DEFAULT NULL,
  `payment_address_format` text,
  `payment_method` varchar(128) DEFAULT NULL,
  `comment` text,
  `total` decimal(10,0) DEFAULT NULL,
  `reward` int(8) DEFAULT NULL,
  `order_status_id` int(11) DEFAULT NULL,
  `affiliate_id` int(11) DEFAULT NULL,
  `commision` decimal(10,0) DEFAULT NULL,
  `currency_code` varchar(3) DEFAULT NULL,
  `currency_value` decimal(11,0) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `payment_flag` int(3) DEFAULT NULL,
  `order_name` varchar(32) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`order_id`, `customer_id`, `currency_id`, `shipping_zone_id`, `payment_zone_id`, `shipping_country_id`, `payment_country_id`, `invoice_no`, `invoice_prefix`, `order_prefix_id`, `firstname`, `lastname`, `email`, `telephone`, `fax`, `shipping_firstname`, `shipping_lastname`, `shipping_company`, `shipping_address_1`, `shipping_address_2`, `shipping_city`, `shipping_postcode`, `shipping_country`, `shipping_zone`, `shipping_address_format`, `shipping_method`, `payment_firstname`, `payment_lastname`, `payment_company`, `payment_address_1`, `payment_address_2`, `payment_city`, `payment_postcode`, `payment_country`, `payment_zone`, `payment_address_format`, `payment_method`, `comment`, `total`, `reward`, `order_status_id`, `affiliate_id`, `commision`, `currency_code`, `currency_value`, `ip`, `payment_flag`, `order_name`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 7, NULL, NULL, NULL, NULL, NULL, '1', 'SPU', 'SPU-202101211', NULL, NULL, 'lamhung.nuce01@gmail.com', '01123456', NULL, 'lamhung nuce', 'Hung', '', 'HN VIETNAM', 'HN VIETNAM', 'HN VIETNAM', '100000', 'Argentina', 'HN VIETNAM', '', NULL, 'lamhung nuce', 'Hung', '', 'HN VIETNAM', 'HN VIETNAM', 'HN VIETNAM', '100000', '10', 'HN VIETNAM', '', NULL, NULL, '12000', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2021-01-21 10:37:59', '2021-01-21 11:45:27'),
(2, 7, NULL, NULL, NULL, NULL, NULL, '2', 'SPU', 'SPU-202101212', NULL, NULL, 'lamhung.nuce01@gmail.com', '01123456', NULL, 'lamhung nuce', 'hung', '', 'HN VN', 'HN VN', 'HN VN', '100000', 'Afghanistan', 'HN VN', '', NULL, 'lamhung nuce', 'hung', '', 'HN VN', 'HN VN', 'HN VN', '100000', '1', 'HN VN', '', NULL, NULL, '45321', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2021-01-21 11:44:56', '2021-01-21 11:44:56');

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `order_history_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `order_status_id` int(11) DEFAULT NULL,
  `notify` tinytext,
  `comment` text,
  `date_added` datetime DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_log`
--

CREATE TABLE `order_log` (
  `order_log_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `currency_id` int(11) DEFAULT NULL,
  `shipping_zone_id` int(11) DEFAULT NULL,
  `payment_zone_id` int(11) DEFAULT NULL,
  `shipping_country_id` int(11) DEFAULT NULL,
  `payment_country_id` int(11) DEFAULT NULL,
  `invoice_no` varchar(45) DEFAULT NULL,
  `invoice_prefix` varchar(26) DEFAULT NULL,
  `order_prefix_id` varchar(255) DEFAULT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `email` varchar(96) DEFAULT NULL,
  `telephone` varchar(32) DEFAULT NULL,
  `fax` varchar(32) DEFAULT NULL,
  `shipping_firstname` varchar(32) DEFAULT NULL,
  `shipping_lastname` varchar(32) DEFAULT NULL,
  `shipping_company` varchar(32) DEFAULT NULL,
  `shipping_address_1` varchar(128) DEFAULT NULL,
  `shipping_address_2` varchar(128) DEFAULT NULL,
  `shipping_city` varchar(128) DEFAULT NULL,
  `shipping_postcode` varchar(10) DEFAULT NULL,
  `shipping_country` varchar(128) DEFAULT NULL,
  `shipping_zone` varchar(128) DEFAULT NULL,
  `shipping_address_format` text,
  `shipping_method` varchar(128) DEFAULT NULL,
  `payment_firstname` varchar(32) DEFAULT NULL,
  `payment_lastname` varchar(32) DEFAULT NULL,
  `payment_company` varchar(32) DEFAULT NULL,
  `payment_address_1` varchar(128) DEFAULT NULL,
  `payment_address_2` varchar(128) DEFAULT NULL,
  `payment_city` varchar(128) DEFAULT NULL,
  `payment_postcode` varchar(10) DEFAULT NULL,
  `payment_country` varchar(128) DEFAULT NULL,
  `payment_zone` varchar(128) DEFAULT NULL,
  `payment_address_format` text,
  `payment_method` varchar(128) DEFAULT NULL,
  `comment` text,
  `total` decimal(15,4) DEFAULT NULL,
  `reward` int(8) DEFAULT NULL,
  `order_status_id` int(11) DEFAULT NULL,
  `affiliate_id` int(11) DEFAULT NULL,
  `commision` decimal(10,0) DEFAULT NULL,
  `currency_code` varchar(3) DEFAULT NULL,
  `currency_value` decimal(11,0) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `payment_flag` int(3) DEFAULT NULL,
  `order_name` varchar(32) DEFAULT NULL,
  `is_active` varchar(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_log`
--

INSERT INTO `order_log` (`order_log_id`, `customer_id`, `currency_id`, `shipping_zone_id`, `payment_zone_id`, `shipping_country_id`, `payment_country_id`, `invoice_no`, `invoice_prefix`, `order_prefix_id`, `firstname`, `lastname`, `email`, `telephone`, `fax`, `shipping_firstname`, `shipping_lastname`, `shipping_company`, `shipping_address_1`, `shipping_address_2`, `shipping_city`, `shipping_postcode`, `shipping_country`, `shipping_zone`, `shipping_address_format`, `shipping_method`, `payment_firstname`, `payment_lastname`, `payment_company`, `payment_address_1`, `payment_address_2`, `payment_city`, `payment_postcode`, `payment_country`, `payment_zone`, `payment_address_format`, `payment_method`, `comment`, `total`, `reward`, `order_status_id`, `affiliate_id`, `commision`, `currency_code`, `currency_value`, `ip`, `payment_flag`, `order_name`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 7, NULL, NULL, NULL, NULL, NULL, '1', 'SPU', 'SPU-202101211', NULL, NULL, 'lamhung.nuce01@gmail.com', '01123456', NULL, 'lamhung nuce', 'Hung', '', 'HN VIETNAM', 'HN VIETNAM', 'HN VIETNAM', '100000', 'Argentina', 'HN VIETNAM', '', NULL, 'lamhung nuce', 'Hung', '', 'HN VIETNAM', 'HN VIETNAM', 'HN VIETNAM', '100000', '10', 'HN VIETNAM', '', NULL, NULL, '12000.0000', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2021-01-21 10:37:59', '2021-01-21 10:38:00');

-- --------------------------------------------------------

--
-- Table structure for table `order_option`
--

CREATE TABLE `order_option` (
  `order_option_id` int(11) NOT NULL,
  `product_option_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `order_product_id` int(11) DEFAULT NULL,
  `product_option_value_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `value` text NOT NULL,
  `type` varchar(32) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_product`
--

CREATE TABLE `order_product` (
  `order_product_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `quantity` int(4) NOT NULL,
  `trace` decimal(15,4) DEFAULT NULL,
  `product_price` decimal(15,4) DEFAULT NULL,
  `total` decimal(15,4) NOT NULL,
  `tax` decimal(15,4) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_product`
--

INSERT INTO `order_product` (`order_product_id`, `product_id`, `order_id`, `name`, `model`, `quantity`, `trace`, `product_price`, `total`, `tax`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 1, 1, 'Meteorological Station', 'Meteorological Station STEM', 1, NULL, '12000.0000', '12000.0000', NULL, NULL, NULL, NULL, '2021-01-21 10:37:59', NULL),
(2, 293, 2, 'Canon RF 85mm f/2 Macro IS STM Lens', 'Canon RF 85mm f/2 Macro IS STM Lens', 1, NULL, '45321.0000', '45321.0000', NULL, NULL, NULL, NULL, '2021-01-21 11:44:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `order_status_id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `color_code` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`order_status_id`, `name`, `color_code`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 'Pending', '#6798e3', 0, NULL, NULL, '2019-02-19 04:04:03', '2019-05-07 06:32:39'),
(2, 'Completed', '#25a006', 1, NULL, NULL, '2019-02-19 04:04:21', '2019-04-05 02:34:14'),
(3, 'Hold', '#f71d1d', 1, NULL, NULL, '2019-02-19 04:04:58', '2019-03-19 08:00:50');

-- --------------------------------------------------------

--
-- Table structure for table `order_total`
--

CREATE TABLE `order_total` (
  `order_total_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `code` varchar(32) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `value` decimal(15,4) DEFAULT NULL,
  `sort_order` int(3) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_total`
--

INSERT INTO `order_total` (`order_total_id`, `order_id`, `code`, `title`, `text`, `value`, `sort_order`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 1, NULL, NULL, NULL, '12000.0000', NULL, NULL, NULL, NULL, '2021-01-21 10:38:00', NULL),
(2, 2, NULL, NULL, NULL, '45321.0000', NULL, NULL, NULL, NULL, '2021-01-21 11:44:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE `page` (
  `page_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `intro` text,
  `full_text` text,
  `page_group_id` int(11) DEFAULT NULL,
  `sort_order` int(3) DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` varchar(255) DEFAULT NULL,
  `meta_tag_keywords` varchar(255) DEFAULT NULL,
  `view_page_count` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `page`
--

INSERT INTO `page` (`page_id`, `title`, `intro`, `full_text`, `page_group_id`, `sort_order`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords`, `view_page_count`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(139, 'About Us', NULL, '<p>This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>\n\n<ul>\n	<li>Clickable nav links that smooth scroll to page sections</li>\n	<li>Responsive behavior when clicking nav links perfect for a one page website</li>\n	<li>Bootstrap&#39;s scrollspy feature which highlights which section of the page you&#39;re on in the navbar</li>\n	<li>Minimal custom CSS so you are free to explore your own unique design options</li>\n</ul>\n', NULL, NULL, 'about us', 'about us', 'about us', NULL, 1, NULL, NULL, '2021-01-21 00:42:45', '2021-01-21 01:49:28'),
(140, 'MoreInfomation', NULL, '<h1>Get in&nbsp;touch</h1>\n\n<p>Get in touch with our Mobile experts or support team.</p>\n', NULL, NULL, '', '', '', NULL, 1, NULL, NULL, '2021-01-21 01:42:26', '2021-01-21 01:42:37');

-- --------------------------------------------------------

--
-- Table structure for table `page_group`
--

CREATE TABLE `page_group` (
  `page_group_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `sku` varchar(64) DEFAULT NULL,
  `upc` varchar(12) DEFAULT NULL,
  `quantity` int(4) DEFAULT NULL,
  `stock_status_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` text,
  `manufacturer_id` int(11) DEFAULT NULL,
  `shipping` tinyint(4) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `date_available` date DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `amount` float DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` varchar(255) DEFAULT NULL,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `subtract_stock` int(11) DEFAULT NULL COMMENT '0->no 1->yes',
  `minimum_quantity` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `wishlist_status` int(11) DEFAULT NULL,
  `delete_flag` int(11) NOT NULL DEFAULT '0',
  `is_featured` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `condition` int(11) DEFAULT NULL COMMENT '1->new 2->used',
  `today_deals` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `sku`, `upc`, `quantity`, `stock_status_id`, `image`, `image_path`, `manufacturer_id`, `shipping`, `price`, `date_available`, `sort_order`, `name`, `description`, `amount`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keyword`, `discount`, `subtract_stock`, `minimum_quantity`, `location`, `wishlist_status`, `delete_flag`, `is_featured`, `rating`, `condition`, `today_deals`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, '36524', '123366525', 120, 78, NULL, NULL, 101, 1, '12000', '2021-01-21', 1, 'Meteorological Station', '<p>&lt;p&gt;Product: Meteorological Station - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING&lt;br /&gt;<br />\n--------------------PRODUCT INFORMATION------------------&lt;br /&gt;<br />\nPrice: 157,000&lt;br /&gt;<br />\nMeteorological Station STEM - is a hand-made DIY toy model with detailed instructions for children assembling by hand,&lt;br /&gt;<br />\nexercise children&amp;#39;s ability to practice and observe, and train children&amp;#39;s patience. ability to think and be able to innovate.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;STEM Meteorological Station is a versatile 6-in-1 product that helps children learn about wind, rain, temperature, greenhouse effects and water circulation.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;1. Anemometer&lt;/p&gt;</p>\n\n<p>&lt;p&gt;2. Wind speed meter&lt;/p&gt;</p>\n\n<p>&lt;p&gt;3. Thermometer measures temperature&lt;/p&gt;</p>\n\n<p>&lt;p&gt;4. Rainfall meter&lt;/p&gt;</p>\n\n<p>&lt;p&gt;5. The greenhouse effect&lt;/p&gt;</p>\n\n<p>&lt;p&gt;6. The closed ecosystem of the tree&lt;/p&gt;</p>\n\n<p>&lt;p&gt;A complete product - A smart toy - Evoking profound knowledge for children.&lt;br /&gt;<br />\nLet&amp;#39;s assemble &amp;amp; learn with your child about STEM Meteorological Station of STEM Toys.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;STEM weather station is entirely made of ABS, absolutely safe for children to use.&lt;br /&gt;<br />\n------&lt;br /&gt;<br />\nRemember: &amp;quot;Scientific knowledge + educational ability = future competitiveness&amp;quot;&lt;br /&gt;<br />\nSee product details at:&lt;/p&gt;</p>\n', NULL, 'Meteorological Station STEM', NULL, NULL, NULL, 1, 0, 'location', NULL, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2021-01-21 10:34:07', '2021-01-21 10:34:11'),
(286, '555', '', 12, 2, NULL, NULL, 101, 1, '70000', '2020-07-29', 0, 'Set of 92 exam', '<p>Product: Set of 92 Experiments - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 400,000<br />\nSet of 92 experiments to create colorful interesting experiments that satisfy your baby&#39;s dream of doing science<br />\nA variety of products for use such as: fairy tears, cabbage, ,, transition colors, artificial snow ...<br />\nLet your child put on a white blouse and become a child scientist now<br />\nCompact product, absolute safety for the baby<br />\nPracticing intellect, observation ability, practical ability</p>\n\n<p>------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 04:39:46', '2021-01-21 10:42:51'),
(287, '111', '', 10, 2, NULL, NULL, 101, 1, '210000', '2020-07-31', 0, 'Touch light on and off automatically', '<p>Product: Induction Open Light - STEM Toys - Smart Assembly Toys<br />\n- STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 310,000<br />\nThe auto-opening sensor light will automatically turn on when someone enters the sensor area and will automatically turn off after 30 seconds when no people are available.</p>\n\n<p>Touch lights automatically open from wood, so you can paint another color to match the buildings in the house</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about the STEM Toy Auto-open Induction Lamp.</p>\n\n<p>The auto-opening touch light is a smart toy that is easy to assemble, improving practical ability, thinking ability and innovation ability.<br />\nDeveloping ability: intellect, grasping, crafting, visioning, practicing hobbies, senses, emotions, hand-eye coordination</p>\n\n<p>Wood products are absolutely safe for children</p>\n\n<p>------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 04:50:42', '2021-01-21 10:44:17'),
(288, '666', '', 16, 3, NULL, NULL, 101, 1, '80000', '2020-07-30', 0, 'Weather station', '<p>Product: Meteorological Station - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 157,000<br />\nMeteorological Station STEM - is a hand-made DIY toy model with detailed instructions for children assembling by hand,<br />\nexercise children&#39;s ability to practice and observe, and train children&#39;s patience. ability to think and be able to innovate.</p>\n\n<p>STEM Meteorological Station is a versatile 6-in-1 product that helps children learn about wind, rain, temperature, greenhouse effects and water circulation.</p>\n\n<p>1. Anemometer</p>\n\n<p>2. Wind speed meter</p>\n\n<p>3. Thermometer measures temperature</p>\n\n<p>4. Rainfall meter</p>\n\n<p>5. The greenhouse effect</p>\n\n<p>6. The closed ecosystem of the tree</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about STEM Meteorological Station of STEM Toys.</p>\n\n<p>STEM weather station is entirely made of ABS, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 04:58:37', '2021-01-21 10:44:04'),
(289, '777', '1312', 98, 2, NULL, NULL, 97, 1, '57000', '2021-01-21', 1, 'Xiaomi Mi 11 Pro', '<p>Perhaps surprisingly, the design of the camera island on the back is completely different compared to that seen on the Mi 11. The Mi 11 Pro has four cameras, one of which is of the periscope zoom variety, and the &quot;120x&quot; inscription next to it tells us that Xiaomi doesn&#39;t want this phone to digitally zoom any less than the&nbsp;<a href=\"https://www.gsmarena.com/xiaomi_mi_10_ultra-10361.php\">Mi 10 Ultra</a>.</p>\n\n<p>The rest of the writing reveals that the ultrawide has a 35mm equivalent focal length of 12mm, while the periscope goes to 120mm. One of the other shooters is likely to be the exact same 108 MP sensor as the one in the Mi 11, while the last camera could be a 2x or 3x tele for smoother zooming.</p>\n\n<p>We don&#39;t yet have a picture of the front of the Mi 11 Pro, but rumor has it you should expect to find the exact same screen that the Mi 11 has, with its 6.81&quot; size, curved sides, 1440x3200 resolution, 120 Hz refresh rate, 480 Hz touch sampling rate, and 1,500-nit peak brightness. Under the hood the Snapdragon 888 should reign supreme, of course.</p>\n', NULL, 'xiao mi', NULL, NULL, NULL, 1, 1, 'VN', 0, 0, 1, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 05:10:27', '2021-01-21 10:50:04'),
(290, '888', '123', 45, 2, NULL, NULL, 99, 1, '123000', '2020-07-29', 0, 'iPhone 12 pro max', '<p>With the Apple iPhone 12 Pro Max, our collection is finally complete. It is the biggest, heaviest, most powerful, and most feature-rich iPhone Apple has made so far, and that&#39;s enough to make it the best-seller it was designed to become.</p>\n\n<p>&nbsp;</p>\n\n<p>The new iPhone 12 Pro Max is the only member of Series 12 to pack the new and improved triple-camera on the back. This might be even enough to entice users who may not even be after the Max size. That is how a proper upgrade should be done - by updating every aspect possible, not just the design.</p>\n\n<p>iPhone 12 mini, iPhone 12, iPhone 12 Pro Max and iPhone 12 Pro</p>\n\n<p>The iPhone 12 Pro&#39;s Max denomination isn&#39;t standing just for&nbsp;<em>maximum</em>&nbsp;size, but for the complete set of new features. The biggest iPhone to date enjoys the most premium and durable design Apple has ever made, the most powerful chip with 5G support, the latest Apple camera, the LiDAR scanner, the largest speakers, the beefiest battery, and, of course, MagSafe support.</p>\n\n<p>Apple iPhone 12 family</p>\n\n<p>This Max version could have been even better with a 120Hz display, but, alas, this feature didn&#39;t make the cut on Series 12. Maybe next year, who knows, but today even the most expensive iPhone can&#39;t show more than 60fps on its screen.</p>\n\n<p>We know you are eager to see the Pro Max&#39;s battery life and camera performance, but first things first. Let&#39;s take a closer look through its specs, shall we?</p>\n\n<h3>Apple iPhone 12 Pro Max specs:</h3>\n\n<ul>\n	<li><strong>Body:</strong>&nbsp;Stainless-steel frame with glossy finish, Ceramic Shield front with oleophobic coating, Glass back with frosted finish, IP68 certified for water and dust resistance. Silver, Graphite, Gold, Pacific Blue color options. 160.8 x 78.1 x 7.4 mm, 228 g.</li>\n	<li><strong>Display:</strong>&nbsp;6.7&quot; Retina XDR OLED screen of 1,284 x 2,778 px resolution, 458ppi, 800 nits, 120Hz touch sensing. HDR10, Dolby Vision support, wide color gamut. True Tone.</li>\n	<li><strong>Chipset:</strong>&nbsp;Apple A14 Bionic chip (5nm) - Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm with 3.1GHz Turboboost) Apple CPU, four-core Apple GPU, 16-core Apple NPU 4-gen</li>\n	<li><strong>Memory:</strong>&nbsp;6GB of RAM; 128/256/512GB of internal storage</li>\n	<li><strong>Rear camera:</strong>&nbsp;Triple 12MP camera: Primary - 1.7&micro;m pixels, 26mm, f/1.6, IBIS, Dual Pixel AF; Ultrawide-angle - 1.0&micro;m pixels, 13mm, f/2.4, 120-degree field of view; Telephoto -- 1.0&micro;m pixels, 65mm, f/2.2, OIS, 2.5x optical zoom; dual-LED flash with slow sync. Night Mode, Smart HDR 3, Deep Fusion.</li>\n	<li><strong>Video recording:</strong>&nbsp;2160p@60/30fps, 1080p@30/60/120/240fps video recording with wider dynamic range and spatial sound, OIS + EIS, Dolby Vision capturing.</li>\n	<li><strong>Front camera:</strong>&nbsp;Dual camera - 23mm 12MP f/2.2 front-facing camera with HDR mode + 3D TOF camera; Night Mode, Smart HDR 3, Deep Fusion. 2160p@60/30fps, 1080p@30/60/120fps video recording with wider dynamic range and spatial sound, EIS.</li>\n	<li><strong>Connectivity:</strong>&nbsp;Dual SIM, 5G, 4G; Wi-Fi a/b/g/n/ac/6; Bluetooth 5.0; Lightning port; GPS with A-GPS, GLONASS, GALILEO, QZSS; NFC; Apple U1 chip ultrawideband</li>\n	<li><strong>Battery:</strong>&nbsp;3,687 mAh battery, 20W fast charging, 15 Qi wireless charging (MagSafe)</li>\n	<li><strong>Misc:</strong>&nbsp;Face ID through dedicated TrueDepth camera, stereo speakers, Taptic Engine</li>\n</ul>\n\n<p>The iPhone 12 Pro Max is an upscaled version of the iPhone 12 Pro with a bigger display and battery. It also features a larger 12MP sensor for its primary camera with the industry&#39;s first sensor-shift image stabilization. Finally, its telephoto camera has an even longer-range lens now - 65mm f/2.2 for 2.5x optical zoom. Nice!</p>\n\n<p>Finally, even if the iPhone 12 Pro Max is one of the most expensive phones today, just like the rest of the iPhone 12&#39;s, it also comes accessory-free thanks to Apple&#39;s latest controversial endeavor to save the planet.</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, 0, 1, 1, 1, NULL, NULL, '2019-05-10 05:23:03', '2021-01-21 10:57:54'),
(292, '222', '', 10, 3, NULL, NULL, 98, 1, '34500', '2020-07-29', 0, 'HUAWEI Mate 40 Pro', '<p>Packing more than 15 billion4 transistors, the extremely compact 5 nm Kirin 9000 5G SoC is capable of multi-tasking, processing massive amounts of data, and powering instantly-responsive AI computing with ease. Just lay back, and let it do the work.</p>\n\n<p>CPU</p>\n\n<p>With a big core clocking at 3.13 GHz and a three-level architecture, the octa-core CPU is tailored for improved performance and power efficiency.</p>\n\n<p>GPU</p>\n\n<p>The 24-core Mali-G78 GPU offers heightened image processing so you can enjoy immersive gaming experience.</p>\n\n<p>NPU</p>\n\n<p>Consisting of two big cores and a tiny core, the reimagined NPU pushes AI processing to new heights, and applies it across a wide range of functions including camera features, gesture controls and AI-assisted object recognition.</p>\n\n<p>See, Hear and Feel.<br />\nUnexpected Sensations.</p>\n\n<p><br />\n* The game displayed above is ACE RACER.</p>\n\n<p>The 24-core Mali-G78 GPU delivers impressive image processing capabilities for a heightened gaming experience. With the sparkling 3D audio from the dual speakers, and the simulated vibrations from the linear motor - to immerse your mind, body and soul in every action.</p>\n\n<p>Follows Your Lead</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 05:51:02', '2021-01-21 11:05:46'),
(293, '444', '', 41, 78, NULL, NULL, 102, 1, '45321', '2020-07-24', 0, 'Canon RF 85mm f/2 Macro IS STM Lens', '<p>Key Features</p>\n\n<ul>\n	<li>RF-Mount Lens/Full-Frame Format</li>\n	<li>Maximum Magnification: 1:2</li>\n	<li>Minimum Focusing Distance: 1.15&#39;</li>\n	<li>One UD Element</li>\n</ul>\n\n<p>Show&nbsp;More</p>\n\n<p>Combining a short-telephoto field of view with a sleek design and close-focusing performance, the&nbsp;<strong>RF 85mm f/2 Macro IS STM</strong>&nbsp;is a well-rounded lens for a range of subjects, from portraits to macro subjects. Its close focus design enables working with subject matter as close as 1.15&#39; away with a 1:2 maximum magnification and the STM stepping motor affords impressively quiet and smooth autofocus performance and full-time manual focus override. Helping to create sharp imagery, the lens also features optical image stabilization, along with Hybrid IS, to suppress up to five stops of camera shake for cleaner, steadier shooting. A UD (Ultra low Dispersion) element is also used in the optical design to minimize aberrations and ensure clarity. Additionally, a configurable Control Ring lets you adjust exposure settings, including ISO, aperture, and exposure compensation, from the lens itself.</p>\n\n<p><a href=\"https://www.bhphotovideo.com/c/product/1547012-REG/canon_rf_85mm_f_2_stm.html/overview\">More Details</a></p>\n', NULL, 'Canon RF 85mm f/2 Macro IS STM Lens', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 06:04:50', '2021-01-21 11:26:30'),
(294, '333', '', 12, 2, NULL, NULL, 75, 1, '54600', '2020-07-31', 0, 'Toy rocket', '<p>Product: STEM Missile - STEM Toy - Smart Toy - Assembly Toy - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 123,000<br />\nSTEM rocket - is a hand-made DIY toy model with detailed instructions for children to assemble by hand, train their ability to practice and observe, and train their patience. innovation ability, creative thinking</p>\n\n<p>STEM rocket helps children learn about air pressure and uses pressure to launch a rocket into the sky. Also learn about oblique throw equations, experiment with tilt angles to throw the furthest.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children. Let&#39;s assemble &amp; learn with your child about STEM Missiles of STEM Toys.<br />\nSTEM rocket is completely ABS plastic, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 06:07:25', '2020-10-28 17:20:51'),
(295, '999', '', 34, 1, NULL, NULL, 79, 1, '54000', '2020-07-31', 0, 'Smart fire fan', '<p>Product: Intelligent Fire Fan - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 186,000<br />\nSmart fire fan is a hand-made DIY toy model with detailed instructions for children to assemble by hand,<br />\nexercise children&#39;s ability to practice and observe, and train children&#39;s patience. ability to think and innovate</p>\n\n<p>The intelligent fire-fighting fan mainly uses infrared flame sensor to detect the fire, then transmits the low signal to the relay module, then drives the horn through the relay to emit alarm and audible sounds. .<br />\nAt the same time, the motor drives the propeller to blow the fire source.<br />\nIt is suitable for demonstration in classroom teaching by students, using small-scale inventions, manual labor and small production.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about STEM Toys Smart Fire Fan.<br />\nIntelligent fire-fighting fan is completely made of ABS plastic, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, 2, 1, 1, 1, NULL, NULL, '2019-05-10 06:18:17', '2020-10-28 01:06:25'),
(299, '1000', '', 45, 1, NULL, NULL, 63, 1, '76000', '2020-07-31', 0, 'Solar boat', '<p>Today, clean energy - solar energy has been applied a lot in life, contributing to environmental protection and Earth protection.<br />\nSo where does solar power come from? Let your child answer that question through the &quot;Solar Boat&quot; product.</p>\n\n<p>Solar batteries are capable of converting solar energy (energy from light) into electricity.<br />\nbased on the principle of the photovoltaic emission electrons when illuminated. Photovoltaic batteries (solar cells) are made from photovoltaic cells.<br />\nThe solar boat is an easy-to-assemble smart toy that improves hands-on, thinking, and innovation.<br />\nSolar boat is entirely made of ABS plastic, absolutely safe for children to use.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about the STEM Toy Solar Boat.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, 0, 1, 0, 1, NULL, NULL, '2019-05-10 06:51:47', '2020-10-28 17:20:51'),
(300, '1234', '', 25, 3, NULL, NULL, 75, 1, '89000', '2020-07-30', 0, 'Password type box', '<p>Today, clean energy - solar energy has been applied a lot in life, contributing to environmental protection and Earth protection.<br />\nSo where does solar power come from? Let your child answer that question through the &quot;Solar Boat&quot; product.</p>\n\n<p>Solar batteries are capable of converting solar energy (energy from light) into electricity.<br />\nbased on the principle of the photovoltaic emission electrons when illuminated. Photovoltaic batteries (solar cells) are made from photovoltaic cells.<br />\nThe solar boat is an easy-to-assemble smart toy that improves hands-on, thinking, and innovation.<br />\nSolar boat is entirely made of ABS plastic, absolutely safe for children to use.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about the STEM Toy Solar Boat.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 07:19:51', '2020-10-28 17:20:51'),
(302, '3467', '', 34, 1, NULL, NULL, 83, 1, '123000', '2020-07-31', 0, 'Robot bionic', '<p>The bionic wind robot is a hand-made DIY toy model with detailed instructions for children assembling by hand,<br />\nexercise children&#39;s ability to practice and observe, and train their patience.</p>\n\n<p>The Viking bionic wind robot doesn&#39;t need any electric fuel.<br />\nIt cares about the wind, the wind like its snacks, it relies on wind energy to run.<br />\nRely on mechanical principles and natural wind to move forward.<br />\nThe intelligence of the structure lies in the proper use of the balance to convert physical variables, and the energy conversion rate is very high.</p>\n\n<p>Production method: specially designed, no need to use glue, safe and convenient. A clever and exciting assembly journey of the product.</p>\n\n<p>Bionics is primarily for observing, studying and simulating the special abilities of the organism in nature, including structure, principles, behavior, various organ functions, chemical processes and physics, energy supplies, memory and the movements of organisms. Therefore, scientists use these principles to provide new design ideas, working principles and scientific and technical methods of system architecture to create new ones.</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 07:34:55', '2020-10-28 01:06:25'),
(303, '123123', 'weq', 45, 2, NULL, NULL, 92, 1, '12000', '2020-08-01', 1, 'San pham nhieu danh muc', '<p>dsadsa</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, 'vn', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2020-08-01 11:10:47', '2020-10-28 01:06:25');

-- --------------------------------------------------------

--
-- Table structure for table `product_description`
--

CREATE TABLE `product_description` (
  `product_description_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `meta_description` text,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_discount`
--

CREATE TABLE `product_discount` (
  `product_discount_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(4) NOT NULL,
  `priority` int(5) NOT NULL,
  `price` decimal(15,4) NOT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_discount`
--

INSERT INTO `product_discount` (`product_discount_id`, `product_id`, `quantity`, `priority`, `price`, `date_start`, `date_end`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 293, 1, 1, '40000.0000', '2021-01-20', '2021-01-27', NULL, NULL, NULL, '2021-01-21 11:26:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `product_image_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `container_name` varchar(255) DEFAULT NULL,
  `default_image` int(11) DEFAULT NULL,
  `sort_order` int(3) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`product_image_id`, `product_id`, `image`, `container_name`, `default_image`, `sort_order`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 1, 'Img_1611200025249.jpeg', 'Product/STEM/', 1, NULL, NULL, NULL, NULL, '2021-01-21 10:34:07', NULL),
(2, 286, 'Img_1557487542287.jpeg', 'Product/STEM/', 1, NULL, NULL, NULL, NULL, '2021-01-21 10:42:51', NULL),
(6, 288, 'Img_1557484873382.jpeg', 'Product/STEM/', 1, NULL, NULL, NULL, NULL, '2021-01-21 10:44:04', NULL),
(8, 287, 'Img_1557488489793.jpeg', 'Product/STEM/', 1, NULL, NULL, NULL, NULL, '2021-01-21 10:44:17', NULL),
(9, 289, 'Mi11Pro.jpg', 'Product/Electronics/', 1, NULL, NULL, NULL, NULL, '2021-01-21 10:50:04', NULL),
(11, 290, 'apple-iphone-12-pro-max.jpg', 'Product/Electronics/', 1, NULL, NULL, NULL, NULL, '2021-01-21 10:57:54', NULL),
(12, 292, 'HuaweiMate40p.png', 'Product/Electronics/', 1, NULL, NULL, NULL, NULL, '2021-01-21 11:05:46', NULL),
(13, 293, 'Img_1557478996350.jpeg', 'Product/Electronics/Camera/', 1, NULL, NULL, NULL, NULL, '2021-01-21 11:26:30', NULL),
(14, 293, 'Img_1557479003244.jpeg', 'Product/Electronics/Camera/', NULL, NULL, NULL, NULL, NULL, '2021-01-21 11:26:30', NULL),
(15, 293, 'Img_1557479013318.jpeg', 'Product/Electronics/Camera/', NULL, NULL, NULL, NULL, NULL, '2021-01-21 11:26:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_option`
--

CREATE TABLE `product_option` (
  `product_option_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `option_id` int(11) DEFAULT NULL,
  `value` text,
  `required` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_option_value`
--

CREATE TABLE `product_option_value` (
  `product_option_value_id` int(11) NOT NULL,
  `product_option_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `option_id` int(11) DEFAULT NULL,
  `option_value_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `subtract` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `price_prefix` varchar(1) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `points_prefix` varchar(1) DEFAULT NULL,
  `weight` decimal(10,0) DEFAULT NULL,
  `weight_prefix` varchar(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_rating`
--

CREATE TABLE `product_rating` (
  `rating_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_product_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `first_name` varchar(512) DEFAULT NULL,
  `last_name` varchar(512) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `review` text NOT NULL,
  `image_path` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_related`
--

CREATE TABLE `product_related` (
  `related_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `related_product_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_special`
--

CREATE TABLE `product_special` (
  `product_special_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_group_id` int(11) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `price` decimal(15,2) DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_tag`
--

CREATE TABLE `product_tag` (
  `product_tag_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_tagname` text,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_to_category`
--

CREATE TABLE `product_to_category` (
  `product_to_category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_to_category`
--

INSERT INTO `product_to_category` (`product_to_category_id`, `product_id`, `category_id`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 1, 100, 1, NULL, NULL, '2021-01-21 10:34:07', NULL),
(2, 286, 100, 1, NULL, NULL, '2021-01-21 10:42:51', NULL),
(3, 289, 97, 1, NULL, NULL, '2021-01-21 10:50:04', NULL),
(6, 290, 97, 1, NULL, NULL, '2021-01-21 10:57:54', NULL),
(7, 292, 97, 1, NULL, NULL, '2021-01-21 11:05:46', NULL),
(8, 293, 99, 1, NULL, NULL, '2021-01-21 11:26:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_view_log`
--

CREATE TABLE `product_view_log` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `mobile` bigint(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_view_log`
--

INSERT INTO `product_view_log` (`id`, `product_id`, `customer_id`, `first_name`, `last_name`, `email`, `username`, `mobile`, `address`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 1, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 10:37:27', NULL),
(2, 289, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 10:50:18', NULL),
(3, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 11:29:58', NULL),
(4, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 11:44:29', NULL),
(5, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:09:47', NULL),
(6, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:09:58', NULL),
(7, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:10:04', NULL),
(8, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:10:48', NULL),
(9, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:10:55', NULL),
(10, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:11:05', NULL),
(11, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:11:09', NULL),
(12, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:11:15', NULL),
(13, 288, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:12:42', NULL),
(14, 288, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:13:49', NULL),
(15, 288, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:15:38', NULL),
(16, 288, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:15:43', NULL),
(17, 288, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:15:45', NULL),
(18, 1, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:19:49', NULL),
(19, 293, 7, 'lamhung nuce', NULL, 'lamhung.nuce01@gmail.com', 'lamhung.nuce01@gmail.com', 1123456, NULL, NULL, NULL, NULL, '2021-01-21 12:20:13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `settings_id` int(11) NOT NULL,
  `url` varchar(250) DEFAULT NULL,
  `meta_tag_title` varchar(250) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keywords` varchar(250) DEFAULT NULL,
  `store_name` varchar(250) DEFAULT NULL,
  `store_owner` varchar(250) DEFAULT NULL,
  `store_address` text,
  `country_id` int(11) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `store_email` varchar(250) DEFAULT NULL,
  `store_telephone` varchar(50) DEFAULT NULL,
  `store_fax` varchar(30) DEFAULT NULL,
  `store_logo` varchar(250) DEFAULT NULL,
  `store_logo_path` varchar(255) DEFAULT NULL,
  `maintenance_mode` int(3) DEFAULT NULL,
  `store_language_name` varchar(250) DEFAULT NULL,
  `store_currency_id` int(11) DEFAULT NULL,
  `store_image` varchar(255) DEFAULT NULL,
  `store_image_path` text,
  `google` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `order_status` int(11) NOT NULL DEFAULT '1',
  `invoice_prefix` varchar(255) DEFAULT NULL,
  `items_per_page` int(11) DEFAULT NULL,
  `category_product_count` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`settings_id`, `url`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords`, `store_name`, `store_owner`, `store_address`, `country_id`, `zone_id`, `store_email`, `store_telephone`, `store_fax`, `store_logo`, `store_logo_path`, `maintenance_mode`, `store_language_name`, `store_currency_id`, `store_image`, `store_image_path`, `google`, `facebook`, `twitter`, `instagram`, `order_status`, `invoice_prefix`, `items_per_page`, `category_product_count`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(2, 'www.edop.com', 'eshopcommerce', 'description', 'keyword', 'online shopping sites ', 'Admin', 'Ha noi VN', 230, 73, 'admin@shopecommerce.com', '0000000000', '1221', 'Img_1552892256556.jpeg', 'storeLogo/', 0, 'English', 57, 'storeImage', NULL, 'https://www.facebook.com/pon.k.nyt/', 'https://www.facebook.com/pon.k.nyt/', 'https://www.facebook.com/pon.k.nyt/', 'https://www.facebook.com/pon.k.nyt/', 1, 'SPU', 40, 0, 1, '2019-02-13 06:00:00', '2020-07-29 01:16:37', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `stock_status`
--

CREATE TABLE `stock_status` (
  `stock_status_id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stock_status`
--

INSERT INTO `stock_status` (`stock_status_id`, `name`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(78, 'Pre Order', 1, NULL, NULL, '2019-03-25 00:49:53', '2019-04-05 02:33:42'),
(79, 'More Stock', 1, NULL, NULL, '2019-03-25 00:50:34', NULL),
(80, '3 day befor stock', 1, NULL, NULL, '2019-03-25 00:50:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_group_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `avatar_path` varchar(255) DEFAULT NULL,
  `code` varchar(32) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` bigint(20) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_group_id`, `username`, `password`, `first_name`, `last_name`, `email`, `avatar`, `avatar_path`, `code`, `ip`, `address`, `phone_number`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(49, 1, 'admin@piart.com', '$2a$10$UxGUfPF1/sHJdueBeEQQsOej8hkvEwypOk487D7FjMgi/FhSRLSny', 'Admin', ' ', 'admin@picart.com', 'Img_1558091450014.png', 'user/', NULL, NULL, 'VietNam', 5456465656, 1, '2019-02-15 04:13:22', '2020-07-28 10:14:28', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_group`
--

CREATE TABLE `user_group` (
  `group_id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `slug` varchar(64) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_group`
--

INSERT INTO `user_group` (`group_id`, `name`, `slug`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(1, 'Admin', 'optional', 0, '2019-01-21 10:38:14', '2019-04-08 03:59:33', NULL, NULL),
(78, 'Sales Team', NULL, 1, '2019-02-18 03:58:03', '2019-04-08 01:31:15', NULL, NULL),
(79, 'Role 1', NULL, 0, '2019-02-18 05:08:55', '2019-02-19 00:42:26', NULL, NULL),
(80, 'Role 2', NULL, 1, '2019-02-18 05:09:42', NULL, NULL, NULL),
(81, 'Marketting', NULL, 0, '2019-02-18 23:14:33', '2019-03-19 21:33:00', NULL, NULL),
(82, 'admins', NULL, 1, '2019-02-20 05:52:08', NULL, NULL, NULL),
(83, 'aaaa', NULL, 0, '2019-03-20 04:51:56', NULL, NULL, NULL),
(84, 'Marketing', NULL, 1, '2019-03-20 04:52:22', '2019-03-23 04:56:51', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE `zone` (
  `zone_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `code` varchar(32) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`zone_id`, `country_id`, `code`, `name`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(58, 45, 'JAF', 'Jaffna', 0, '2019-02-17 22:17:27', '2019-04-08 01:28:07', NULL, NULL),
(59, 22, 'MUM', 'Mumbai', 1, '2019-02-17 22:17:49', '2019-04-06 03:32:42', NULL, NULL),
(63, 22, 'KL', 'kerala', 1, '2019-02-18 23:46:22', '2019-05-10 04:05:34', NULL, NULL),
(66, 22, 'GOA', 'Goa', 1, '2019-02-19 07:19:48', '2019-03-12 09:11:16', NULL, NULL),
(67, 22, 'PY', 'Pondy', 0, '2019-02-19 07:24:14', '2019-05-10 04:05:46', NULL, NULL),
(68, 24, 'ss', 'ss', 1, '2019-02-19 07:25:57', '2019-04-06 03:33:07', NULL, NULL),
(73, 24, 'Zone', 'Zone', 1, '2019-02-19 07:46:47', '2019-04-06 03:33:01', NULL, NULL),
(74, 30, 'ZX', 'YUY', 1, '2019-02-20 06:38:52', '2019-04-06 03:32:56', NULL, NULL),
(75, 24, 'Y', 'UIU', 1, '2019-02-20 06:39:04', '2019-04-06 03:32:53', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `zone_to_geo_zone`
--

CREATE TABLE `zone_to_geo_zone` (
  `zone_to_geo_zone_id` int(11) NOT NULL,
  `country_id` int(11) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `geo_zone_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access_token`
--
ALTER TABLE `access_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `fk_customer_id_tbl_customer_customer_id` (`customer_id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`),
  ADD KEY `fk_BannerGroup_Banner` (`banner_group_id`);

--
-- Indexes for table `banner_group`
--
ALTER TABLE `banner_group`
  ADD PRIMARY KEY (`banner_group_id`);

--
-- Indexes for table `banner_image`
--
ALTER TABLE `banner_image`
  ADD PRIMARY KEY (`banner_image_id`);

--
-- Indexes for table `banner_image_description`
--
ALTER TABLE `banner_image_description`
  ADD PRIMARY KEY (`banner_image_description_id`),
  ADD KEY `fk_Banner_BannerImageDescription` (`banner_id`),
  ADD KEY `fk_BannerImage_BannerImageDescription` (`banner_image_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `category_description`
--
ALTER TABLE `category_description`
  ADD PRIMARY KEY (`category_description_id`),
  ADD KEY `fk_Category_CategoryDescription` (`category_id`);

--
-- Indexes for table `category_path`
--
ALTER TABLE `category_path`
  ADD PRIMARY KEY (`category_path_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_group`
--
ALTER TABLE `customer_group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_ip`
--
ALTER TABLE `customer_ip`
  ADD PRIMARY KEY (`customer_ip_id`);

--
-- Indexes for table `customer_transaction`
--
ALTER TABLE `customer_transaction`
  ADD PRIMARY KEY (`customer_transaction_id`),
  ADD KEY `fk_customer_transaction_order1` (`order_id`),
  ADD KEY `fk_customer_transaction_customer1` (`customer_id`);

--
-- Indexes for table `customer_wishlist`
--
ALTER TABLE `customer_wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `email_template`
--
ALTER TABLE `email_template`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `geo_zone`
--
ALTER TABLE `geo_zone`
  ADD PRIMARY KEY (`geo_zone_id`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`language_id`);

--
-- Indexes for table `login_log`
--
ALTER TABLE `login_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manufacturer`
--
ALTER TABLE `manufacturer`
  ADD PRIMARY KEY (`manufacturer_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `option`
--
ALTER TABLE `option`
  ADD PRIMARY KEY (`option_id`);

--
-- Indexes for table `option_description`
--
ALTER TABLE `option_description`
  ADD PRIMARY KEY (`option_description_id`),
  ADD KEY `option_id` (`option_id`);

--
-- Indexes for table `option_value`
--
ALTER TABLE `option_value`
  ADD PRIMARY KEY (`option_value_id`);

--
-- Indexes for table `option_value_description`
--
ALTER TABLE `option_value_description`
  ADD PRIMARY KEY (`option_value_description_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `fk_order_customer1` (`customer_id`),
  ADD KEY `fk_order_currency1` (`currency_id`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`order_history_id`),
  ADD KEY `fk_order_history_order1` (`order_id`),
  ADD KEY `fk_order_history_order_status1` (`order_status_id`);

--
-- Indexes for table `order_log`
--
ALTER TABLE `order_log`
  ADD PRIMARY KEY (`order_log_id`),
  ADD KEY `fk_order_customer1` (`customer_id`),
  ADD KEY `fk_order_currency1` (`currency_id`);

--
-- Indexes for table `order_option`
--
ALTER TABLE `order_option`
  ADD PRIMARY KEY (`order_option_id`),
  ADD KEY `fk_order_option_order1` (`order_id`),
  ADD KEY `fk_order_option_order_product1` (`order_product_id`);

--
-- Indexes for table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`order_product_id`),
  ADD KEY `fk_order_product_product1` (`product_id`),
  ADD KEY `fk_order_product_order1` (`order_id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`order_status_id`);

--
-- Indexes for table `order_total`
--
ALTER TABLE `order_total`
  ADD PRIMARY KEY (`order_total_id`);

--
-- Indexes for table `page`
--
ALTER TABLE `page`
  ADD PRIMARY KEY (`page_id`),
  ADD KEY `fk_page_page_group1` (`page_group_id`);

--
-- Indexes for table `page_group`
--
ALTER TABLE `page_group`
  ADD PRIMARY KEY (`page_group_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `product_description`
--
ALTER TABLE `product_description`
  ADD PRIMARY KEY (`product_description_id`);

--
-- Indexes for table `product_discount`
--
ALTER TABLE `product_discount`
  ADD PRIMARY KEY (`product_discount_id`),
  ADD KEY `fk_product_discount_product1` (`product_id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`product_image_id`),
  ADD KEY `fk_product_image_product1` (`product_id`);

--
-- Indexes for table `product_option`
--
ALTER TABLE `product_option`
  ADD PRIMARY KEY (`product_option_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_option_value`
--
ALTER TABLE `product_option_value`
  ADD PRIMARY KEY (`product_option_value_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_rating`
--
ALTER TABLE `product_rating`
  ADD PRIMARY KEY (`rating_id`),
  ADD KEY `fk_product_rating_product1` (`product_id`),
  ADD KEY `product_rating_Cons_order_product` (`order_product_id`);

--
-- Indexes for table `product_related`
--
ALTER TABLE `product_related`
  ADD PRIMARY KEY (`related_id`),
  ADD KEY `fk_product_related_product1` (`product_id`);

--
-- Indexes for table `product_special`
--
ALTER TABLE `product_special`
  ADD PRIMARY KEY (`product_special_id`),
  ADD KEY `product_special_ibfk_1` (`product_id`);

--
-- Indexes for table `product_tag`
--
ALTER TABLE `product_tag`
  ADD PRIMARY KEY (`product_tag_id`);

--
-- Indexes for table `product_to_category`
--
ALTER TABLE `product_to_category`
  ADD PRIMARY KEY (`product_to_category_id`),
  ADD KEY `fk_product_to_category_product1` (`product_id`),
  ADD KEY `fk_product_to_category_category1` (`category_id`);

--
-- Indexes for table `product_view_log`
--
ALTER TABLE `product_view_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_view_log_Cons_product` (`product_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`settings_id`),
  ADD KEY `fk_Country_Settings` (`country_id`);

--
-- Indexes for table `stock_status`
--
ALTER TABLE `stock_status`
  ADD PRIMARY KEY (`stock_status_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `fk_users_usergroup` (`user_group_id`);

--
-- Indexes for table `user_group`
--
ALTER TABLE `user_group`
  ADD PRIMARY KEY (`group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access_token`
--
ALTER TABLE `access_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `banner_group`
--
ALTER TABLE `banner_group`
  MODIFY `banner_group_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banner_image`
--
ALTER TABLE `banner_image`
  MODIFY `banner_image_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banner_image_description`
--
ALTER TABLE `banner_image_description`
  MODIFY `banner_image_description_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `category_description`
--
ALTER TABLE `category_description`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category_path`
--
ALTER TABLE `category_path`
  MODIFY `category_path_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=258;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `customer_group`
--
ALTER TABLE `customer_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_ip`
--
ALTER TABLE `customer_ip`
  MODIFY `customer_ip_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_transaction`
--
ALTER TABLE `customer_transaction`
  MODIFY `customer_transaction_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_wishlist`
--
ALTER TABLE `customer_wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `email_template`
--
ALTER TABLE `email_template`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `geo_zone`
--
ALTER TABLE `geo_zone`
  MODIFY `geo_zone_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `language_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `login_log`
--
ALTER TABLE `login_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=577;

--
-- AUTO_INCREMENT for table `manufacturer`
--
ALTER TABLE `manufacturer`
  MODIFY `manufacturer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `option`
--
ALTER TABLE `option`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `option_description`
--
ALTER TABLE `option_description`
  MODIFY `option_description_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `option_value`
--
ALTER TABLE `option_value`
  MODIFY `option_value_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `option_value_description`
--
ALTER TABLE `option_value_description`
  MODIFY `option_value_description_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `order_history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_log`
--
ALTER TABLE `order_log`
  MODIFY `order_log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_option`
--
ALTER TABLE `order_option`
  MODIFY `order_option_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_product`
--
ALTER TABLE `order_product`
  MODIFY `order_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `order_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_total`
--
ALTER TABLE `order_total`
  MODIFY `order_total_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `page`
--
ALTER TABLE `page`
  MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `page_group`
--
ALTER TABLE `page_group`
  MODIFY `page_group_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=304;

--
-- AUTO_INCREMENT for table `product_description`
--
ALTER TABLE `product_description`
  MODIFY `product_description_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_discount`
--
ALTER TABLE `product_discount`
  MODIFY `product_discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `product_option`
--
ALTER TABLE `product_option`
  MODIFY `product_option_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_option_value`
--
ALTER TABLE `product_option_value`
  MODIFY `product_option_value_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_rating`
--
ALTER TABLE `product_rating`
  MODIFY `rating_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_related`
--
ALTER TABLE `product_related`
  MODIFY `related_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_special`
--
ALTER TABLE `product_special`
  MODIFY `product_special_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_tag`
--
ALTER TABLE `product_tag`
  MODIFY `product_tag_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_to_category`
--
ALTER TABLE `product_to_category`
  MODIFY `product_to_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_view_log`
--
ALTER TABLE `product_view_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `settings_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stock_status`
--
ALTER TABLE `stock_status`
  MODIFY `stock_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
