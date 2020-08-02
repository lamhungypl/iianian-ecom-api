-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 02, 2020 at 02:45 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `eshopcommerce`
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
(1, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTU5NTEzNjY4MywiZXhwIjoxNTk1MjIzMDgzfQ.D3C5MG2g3g4QxhSoXjo-ztMPYU61cj71lElLFflBZI4', NULL, '2020-07-19 12:31:23', NULL, NULL, NULL),
(2, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTU5NTI0MjcwMywiZXhwIjoxNTk1MzI5MTAzfQ.6rw0G14q934wGoMChdP9z6Mp4zT4tiERPa0uxyypbqE', NULL, '2020-07-20 17:58:23', NULL, NULL, NULL),
(3, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTU5NTM1NTk5MywiZXhwIjoxNTk1NDQyMzkzfQ.O2nqLB6A39D1-hYhIctIq-7iULcCU5t9xDVAxGQdzzM', NULL, '2020-07-22 01:26:33', NULL, NULL, NULL),
(4, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTU5NTQ0NjQ4MiwiZXhwIjoxNTk1NTMyODgyfQ.vUMlZQyx_Mqh-pa_O-M-8PJT3szntefXR3oQTKVAQd0', NULL, '2020-07-23 02:34:42', NULL, NULL, NULL),
(5, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTU5NTkwMjIzNiwiZXhwIjoxNTk1OTg4NjM2fQ.2TmVSSRe2pkO7Pi9oDlFWR89pWnfe1sq9zRVnGVYy7w', NULL, '2020-07-28 09:10:36', NULL, NULL, NULL),
(6, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTU5NjE4MjU0NiwiZXhwIjoxNTk2MjY4OTQ2fQ.xBBKHRiSTcGV1thj0RWmBlQP_uQ_-TYu6wW-VbismY0', NULL, '2020-07-31 15:02:26', NULL, NULL, NULL),
(7, 49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTU5NjI0NzIxNiwiZXhwIjoxNTk2MzMzNjE2fQ.yHHa_RYO8UEsF5c3gG-xF8tDCEaU0QDCkgMBl_LOtB4', NULL, '2020-08-01 09:00:16', NULL, NULL, NULL);

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
  `banner_group_id` int(11) DEFAULT NULL,
  `container_name` varchar(255) DEFAULT NULL,
  `view_page_count` int(11) DEFAULT '0',
  `banner_group_banner_group_id` int(11) NOT NULL,
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
(49, 'Hamleys Super Summer Sale Creative ', NULL, NULL, NULL, NULL, 0, 0, 'www.sample.com', 'Img_1595952898837.jpeg', 'banner/', '', 3, NULL, '2019-02-18 03:20:50', '2020-07-28 23:14:58', NULL, NULL),
(50, 'March - CARNIVAL', NULL, NULL, NULL, NULL, 0, 0, 'www.content.com', 'Img_1551872953437.jpeg', 'banner/', '', 8, NULL, '2019-02-18 04:12:32', '2019-05-09 05:53:53', NULL, NULL),
(55, 'Toys have landed', NULL, NULL, NULL, NULL, 0, 0, 'www.sample.com', 'Img_1595952812140.jpeg', 'banner/', '', 2, NULL, '2019-02-25 06:43:49', '2020-07-28 23:13:32', NULL, NULL),
(69, 'Mobile Offers', NULL, NULL, NULL, NULL, 0, 0, 'www.moboffers.com', 'Img_1551871752833.jpeg', 'banner/', '', 7, NULL, '2019-05-09 05:52:57', NULL, NULL, NULL),
(70, 'The latest toys have arrived!', NULL, NULL, NULL, NULL, 0, 0, 'https://www.sample.com/', 'Img_1595952537950.jpeg', 'banner/', '', 1, NULL, '2019-05-09 05:53:40', '2020-07-28 23:10:21', NULL, NULL);

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
(1, 'MENS FASHION', 'image', NULL, 3, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:00:49', '2020-07-31 16:11:21'),
(3, 'BABY & KIDS', 'image', NULL, 0, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:02:04', '2019-05-10 02:02:40'),
(4, 'ELECTRONICS', 'image', NULL, 3, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:02:53', '2020-07-31 16:11:35'),
(5, 'HOME & FURNITURE', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:03:37', '2020-07-31 16:10:24'),
(6, 'SPORTS, BOOK AND MORE', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:04:13', '2020-07-31 16:10:46'),
(7, 'Foot Wear', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:05:37', NULL),
(8, 'Mens Grooming', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:05:55', NULL),
(9, 'Top Wear', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:06:10', NULL),
(11, 'Watches', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:07:03', NULL),
(13, 'Mobiles', 'image', NULL, 4, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:09:21', NULL),
(14, 'Laptops', 'image', NULL, 4, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:10:17', NULL),
(15, 'Desktop PCs', 'image', NULL, 4, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:11:40', NULL),
(16, 'Camera', 'image', NULL, 4, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:11:56', NULL),
(17, 'Toys', 'image', NULL, 3, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:12:48', NULL),
(90, 'Protein Supplements', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:56:09', '2020-07-31 16:11:06'),
(91, 'Kids\'s tablet', 'image', NULL, 0, 1, 'Kids\'s tablet', 'Tablets for kids', 'table', NULL, NULL, NULL, '2020-07-28 09:48:15', NULL),
(92, 'Android Tablet', 'image', NULL, 91, 1, 'Android Tablet', 'Android Tablet', 'android', NULL, NULL, NULL, '2020-07-28 09:50:15', NULL),
(93, 'Do choi 2 tuoi', 'image', NULL, 0, 1, '', '', '', NULL, NULL, NULL, '2020-07-31 15:11:32', NULL),
(94, 'Do choi 4 tuoi', 'image', NULL, 0, 4, '', '', '', NULL, NULL, NULL, '2020-07-31 15:11:54', NULL),
(95, 'Do choi 8 tuoi', 'image', NULL, 0, 8, '', '', '', NULL, NULL, NULL, '2020-07-31 15:12:09', NULL),
(96, 'Do choi 12 tuoi', 'image', NULL, 0, 12, '', '', '', NULL, NULL, NULL, '2020-07-31 15:12:38', NULL);

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
(1, 91, 91, 0, NULL, NULL, NULL, NULL),
(2, 92, 91, 0, NULL, NULL, NULL, NULL),
(3, 92, 92, 1, NULL, NULL, NULL, NULL),
(4, 93, 93, 0, NULL, NULL, NULL, NULL),
(5, 94, 94, 0, NULL, NULL, NULL, NULL),
(6, 95, 95, 0, NULL, NULL, NULL, NULL),
(7, 96, 96, 0, NULL, NULL, NULL, NULL),
(8, 5, 5, 0, NULL, NULL, NULL, NULL),
(9, 6, 6, 0, NULL, NULL, NULL, NULL),
(10, 90, 90, 0, NULL, NULL, NULL, NULL),
(11, 1, 1, 0, NULL, NULL, NULL, NULL),
(12, 4, 4, 0, NULL, NULL, NULL, NULL);

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
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `name`, `iso_code_2`, `iso_code_3`, `address_format`, `postcode_required`, `is_active`) VALUES
(1, 'Afghanistan', 'AF', 'AFG', '', 0, 1),
(2, 'Albania', 'AL', 'ALB', '', 0, 1),
(3, 'Algeria', 'DZ', 'DZA', '', 0, 1),
(4, 'American Samoa', 'AS', 'ASM', '', 0, 1),
(5, 'Andorra', 'AD', 'AND', '', 0, 1),
(6, 'Angola', 'AO', 'AGO', '', 0, 1),
(7, 'Anguilla', 'AI', 'AIA', '', 0, 1),
(8, 'Antarctica', 'AQ', 'ATA', '', 0, 1),
(9, 'Antigua and Barbuda', 'AG', 'ATG', '', 0, 1),
(10, 'Argentina', 'AR', 'ARG', '', 0, 1),
(11, 'Armenia', 'AM', 'ARM', '', 0, 1),
(12, 'Aruba', 'AW', 'ABW', '', 0, 1),
(13, 'Australia', 'AU', 'AUS', '', 0, 1),
(14, 'Austria', 'AT', 'AUT', '', 0, 1),
(15, 'Azerbaijan', 'AZ', 'AZE', '', 0, 1),
(16, 'Bahamas', 'BS', 'BHS', '', 0, 1),
(17, 'Bahrain', 'BH', 'BHR', '', 0, 1),
(18, 'Bangladesh', 'BD', 'BGD', '', 0, 1),
(19, 'Barbados', 'BB', 'BRB', '', 0, 1),
(20, 'Belarus', 'BY', 'BLR', '', 0, 1),
(21, 'Belgium', 'BE', 'BEL', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 0, 1),
(22, 'Belize', 'BZ', 'BLZ', '', 0, 1),
(23, 'Benin', 'BJ', 'BEN', '', 0, 1),
(24, 'Bermuda', 'BM', 'BMU', '', 0, 1),
(25, 'Bhutan', 'BT', 'BTN', '', 0, 1),
(26, 'Bolivia', 'BO', 'BOL', '', 0, 1),
(27, 'Bosnia and Herzegovina', 'BA', 'BIH', '', 0, 1),
(28, 'Botswana', 'BW', 'BWA', '', 0, 1),
(29, 'Bouvet Island', 'BV', 'BVT', '', 0, 1),
(30, 'Brazil', 'BR', 'BRA', '', 0, 1),
(31, 'British Indian Ocean Territory', 'IO', 'IOT', '', 0, 1),
(32, 'Brunei Darussalam', 'BN', 'BRN', '', 0, 1),
(33, 'Bulgaria', 'BG', 'BGR', '', 0, 1),
(34, 'Burkina Faso', 'BF', 'BFA', '', 0, 1),
(35, 'Burundi', 'BI', 'BDI', '', 0, 1),
(36, 'Cambodia', 'KH', 'KHM', '', 0, 1),
(37, 'Cameroon', 'CM', 'CMR', '', 0, 1),
(38, 'Canada', 'CA', 'CAN', '', 0, 1),
(39, 'Cape Verde', 'CV', 'CPV', '', 0, 1),
(40, 'Cayman Islands', 'KY', 'CYM', '', 0, 1),
(41, 'Central African Republic', 'CF', 'CAF', '', 0, 1),
(42, 'Chad', 'TD', 'TCD', '', 0, 1),
(43, 'Chile', 'CL', 'CHL', '', 0, 1),
(44, 'China', 'CN', 'CHN', '', 0, 1),
(45, 'Christmas Island', 'CX', 'CXR', '', 0, 1),
(46, 'Cocos (Keeling) Islands', 'CC', 'CCK', '', 0, 1),
(47, 'Colombia', 'CO', 'COL', '', 0, 1),
(48, 'Comoros', 'KM', 'COM', '', 0, 1),
(49, 'Congo', 'CG', 'COG', '', 0, 1),
(50, 'Cook Islands', 'CK', 'COK', '', 0, 1),
(51, 'Costa Rica', 'CR', 'CRI', '', 0, 1),
(52, 'Cote D\'Ivoire', 'CI', 'CIV', '', 0, 1),
(53, 'Croatia', 'HR', 'HRV', '', 0, 1),
(54, 'Cuba', 'CU', 'CUB', '', 0, 1),
(55, 'Cyprus', 'CY', 'CYP', '', 0, 1),
(56, 'Czech Republic', 'CZ', 'CZE', '', 0, 1),
(57, 'Denmark', 'DK', 'DNK', '', 0, 1),
(58, 'Djibouti', 'DJ', 'DJI', '', 0, 1),
(59, 'Dominica', 'DM', 'DMA', '', 0, 1),
(60, 'Dominican Republic', 'DO', 'DOM', '', 0, 1),
(61, 'East Timor', 'TL', 'TLS', '', 0, 1),
(62, 'Ecuador', 'EC', 'ECU', '', 0, 1),
(63, 'Egypt', 'EG', 'EGY', '', 0, 1),
(64, 'El Salvador', 'SV', 'SLV', '', 0, 1),
(65, 'Equatorial Guinea', 'GQ', 'GNQ', '', 0, 1),
(66, 'Eritrea', 'ER', 'ERI', '', 0, 1),
(67, 'Estonia', 'EE', 'EST', '', 0, 1),
(68, 'Ethiopia', 'ET', 'ETH', '', 0, 1),
(69, 'Falkland Islands (Malvinas)', 'FK', 'FLK', '', 0, 1),
(70, 'Faroe Islands', 'FO', 'FRO', '', 0, 1),
(71, 'Fiji', 'FJ', 'FJI', '', 0, 1),
(72, 'Finland', 'FI', 'FIN', '', 0, 1),
(74, 'France, Metropolitan', 'FR', 'FRA', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1),
(75, 'French Guiana', 'GF', 'GUF', '', 0, 1),
(76, 'French Polynesia', 'PF', 'PYF', '', 0, 1),
(77, 'French Southern Territories', 'TF', 'ATF', '', 0, 1),
(78, 'Gabon', 'GA', 'GAB', '', 0, 1),
(79, 'Gambia', 'GM', 'GMB', '', 0, 1),
(80, 'Georgia', 'GE', 'GEO', '', 0, 1),
(81, 'Germany', 'DE', 'DEU', '{company}\r\n{firstname} {lastname}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1),
(82, 'Ghana', 'GH', 'GHA', '', 0, 1),
(83, 'Gibraltar', 'GI', 'GIB', '', 0, 1),
(84, 'Greece', 'GR', 'GRC', '', 0, 1),
(85, 'Greenland', 'GL', 'GRL', '', 0, 1),
(86, 'Grenada', 'GD', 'GRD', '', 0, 1),
(87, 'Guadeloupe', 'GP', 'GLP', '', 0, 1),
(88, 'Guam', 'GU', 'GUM', '', 0, 1),
(89, 'Guatemala', 'GT', 'GTM', '', 0, 1),
(90, 'Guinea', 'GN', 'GIN', '', 0, 1),
(91, 'Guinea-Bissau', 'GW', 'GNB', '', 0, 1),
(92, 'Guyana', 'GY', 'GUY', '', 0, 1),
(93, 'Haiti', 'HT', 'HTI', '', 0, 1),
(94, 'Heard and Mc Donald Islands', 'HM', 'HMD', '', 0, 1),
(95, 'Honduras', 'HN', 'HND', '', 0, 1),
(96, 'Hong Kong', 'HK', 'HKG', '', 0, 1),
(97, 'Hungary', 'HU', 'HUN', '', 0, 1),
(98, 'Iceland', 'IS', 'ISL', '', 0, 1),
(99, 'India', 'IN', 'IND', '', 0, 1),
(100, 'Indonesia', 'ID', 'IDN', '', 0, 1),
(101, 'Iran (Islamic Republic of)', 'IR', 'IRN', '', 0, 1),
(102, 'Iraq', 'IQ', 'IRQ', '', 0, 1),
(103, 'Ireland', 'IE', 'IRL', '', 0, 1),
(104, 'Israel', 'IL', 'ISR', '', 0, 1),
(105, 'Italy', 'IT', 'ITA', '', 0, 1),
(106, 'Jamaica', 'JM', 'JAM', '', 0, 1),
(107, 'Japan', 'JP', 'JPN', '', 0, 1),
(108, 'Jordan', 'JO', 'JOR', '', 0, 1),
(109, 'Kazakhstan', 'KZ', 'KAZ', '', 0, 1),
(110, 'Kenya', 'KE', 'KEN', '', 0, 1),
(111, 'Kiribati', 'KI', 'KIR', '', 0, 1),
(112, 'North Korea', 'KP', 'PRK', '', 0, 1),
(113, 'South Korea', 'KR', 'KOR', '', 0, 1),
(114, 'Kuwait', 'KW', 'KWT', '', 0, 1),
(115, 'Kyrgyzstan', 'KG', 'KGZ', '', 0, 1),
(116, 'Lao People\'s Democratic Republic', 'LA', 'LAO', '', 0, 1),
(117, 'Latvia', 'LV', 'LVA', '', 0, 1),
(118, 'Lebanon', 'LB', 'LBN', '', 0, 1),
(119, 'Lesotho', 'LS', 'LSO', '', 0, 1),
(120, 'Liberia', 'LR', 'LBR', '', 0, 1),
(121, 'Libyan Arab Jamahiriya', 'LY', 'LBY', '', 0, 1),
(122, 'Liechtenstein', 'LI', 'LIE', '', 0, 1),
(123, 'Lithuania', 'LT', 'LTU', '', 0, 1),
(124, 'Luxembourg', 'LU', 'LUX', '', 0, 1),
(125, 'Macau', 'MO', 'MAC', '', 0, 1),
(126, 'FYROM', 'MK', 'MKD', '', 0, 1),
(127, 'Madagascar', 'MG', 'MDG', '', 0, 1),
(128, 'Malawi', 'MW', 'MWI', '', 0, 1),
(129, 'Malaysia', 'MY', 'MYS', '', 0, 1),
(130, 'Maldives', 'MV', 'MDV', '', 0, 1),
(131, 'Mali', 'ML', 'MLI', '', 0, 1),
(132, 'Malta', 'MT', 'MLT', '', 0, 1),
(133, 'Marshall Islands', 'MH', 'MHL', '', 0, 1),
(134, 'Martinique', 'MQ', 'MTQ', '', 0, 1),
(135, 'Mauritania', 'MR', 'MRT', '', 0, 1),
(136, 'Mauritius', 'MU', 'MUS', '', 0, 1),
(137, 'Mayotte', 'YT', 'MYT', '', 0, 1),
(138, 'Mexico', 'MX', 'MEX', '', 0, 1),
(139, 'Micronesia, Federated States of', 'FM', 'FSM', '', 0, 1),
(140, 'Moldova, Republic of', 'MD', 'MDA', '', 0, 1),
(141, 'Monaco', 'MC', 'MCO', '', 0, 1),
(142, 'Mongolia', 'MN', 'MNG', '', 0, 1),
(143, 'Montserrat', 'MS', 'MSR', '', 0, 1),
(144, 'Morocco', 'MA', 'MAR', '', 0, 1),
(145, 'Mozambique', 'MZ', 'MOZ', '', 0, 1),
(146, 'Myanmar', 'MM', 'MMR', '', 0, 1),
(147, 'Namibia', 'NA', 'NAM', '', 0, 1),
(148, 'Nauru', 'NR', 'NRU', '', 0, 1),
(149, 'Nepal', 'NP', 'NPL', '', 0, 1),
(150, 'Netherlands', 'NL', 'NLD', '', 0, 1),
(151, 'Netherlands Antilles', 'AN', 'ANT', '', 0, 1),
(152, 'New Caledonia', 'NC', 'NCL', '', 0, 1),
(153, 'New Zealand', 'NZ', 'NZL', '', 0, 1),
(154, 'Nicaragua', 'NI', 'NIC', '', 0, 1),
(155, 'Niger', 'NE', 'NER', '', 0, 1),
(156, 'Nigeria', 'NG', 'NGA', '', 0, 1),
(157, 'Niue', 'NU', 'NIU', '', 0, 1),
(158, 'Norfolk Island', 'NF', 'NFK', '', 0, 1),
(159, 'Northern Mariana Islands', 'MP', 'MNP', '', 0, 1),
(160, 'Norway', 'NO', 'NOR', '', 0, 1),
(161, 'Oman', 'OM', 'OMN', '', 0, 1),
(162, 'Pakistan', 'PK', 'PAK', '', 0, 1),
(163, 'Palau', 'PW', 'PLW', '', 0, 1),
(164, 'Panama', 'PA', 'PAN', '', 0, 1),
(165, 'Papua New Guinea', 'PG', 'PNG', '', 0, 1),
(166, 'Paraguay', 'PY', 'PRY', '', 0, 1),
(167, 'Peru', 'PE', 'PER', '', 0, 1),
(168, 'Philippines', 'PH', 'PHL', '', 0, 1),
(169, 'Pitcairn', 'PN', 'PCN', '', 0, 1),
(170, 'Poland', 'PL', 'POL', '', 0, 1),
(171, 'Portugal', 'PT', 'PRT', '', 0, 1),
(172, 'Puerto Rico', 'PR', 'PRI', '', 0, 1),
(173, 'Qatar', 'QA', 'QAT', '', 0, 1),
(174, 'Reunion', 'RE', 'REU', '', 0, 1),
(175, 'Romania', 'RO', 'ROM', '', 0, 1),
(176, 'Russian Federation', 'RU', 'RUS', '', 0, 1),
(177, 'Rwanda', 'RW', 'RWA', '', 0, 1),
(178, 'Saint Kitts and Nevis', 'KN', 'KNA', '', 0, 1),
(179, 'Saint Lucia', 'LC', 'LCA', '', 0, 1),
(180, 'Saint Vincent and the Grenadines', 'VC', 'VCT', '', 0, 1),
(181, 'Samoa', 'WS', 'WSM', '', 0, 1),
(182, 'San Marino', 'SM', 'SMR', '', 0, 1),
(183, 'Sao Tome and Principe', 'ST', 'STP', '', 0, 1),
(184, 'Saudi Arabia', 'SA', 'SAU', '', 0, 1),
(185, 'Senegal', 'SN', 'SEN', '', 0, 1),
(186, 'Seychelles', 'SC', 'SYC', '', 0, 1),
(187, 'Sierra Leone', 'SL', 'SLE', '', 0, 1),
(188, 'Singapore', 'SG', 'SGP', '', 0, 1),
(189, 'Slovak Republic', 'SK', 'SVK', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{city} {postcode}\r\n{zone}\r\n{country}', 0, 1),
(190, 'Slovenia', 'SI', 'SVN', '', 0, 1),
(191, 'Solomon Islands', 'SB', 'SLB', '', 0, 1),
(192, 'Somalia', 'SO', 'SOM', '', 0, 1),
(193, 'South Africa', 'ZA', 'ZAF', '', 0, 1),
(194, 'South Georgia &amp; South Sandwich Islands', 'GS', 'SGS', '', 0, 1),
(195, 'Spain', 'ES', 'ESP', '', 0, 1),
(196, 'Sri Lanka', 'LK', 'LKA', '', 0, 1),
(197, 'St. Helena', 'SH', 'SHN', '', 0, 1),
(198, 'St. Pierre and Miquelon', 'PM', 'SPM', '', 0, 1),
(199, 'Sudan', 'SD', 'SDN', '', 0, 1),
(200, 'Suriname', 'SR', 'SUR', '', 0, 1),
(201, 'Svalbard and Jan Mayen Islands', 'SJ', 'SJM', '', 0, 1),
(202, 'Swaziland', 'SZ', 'SWZ', '', 0, 1),
(203, 'Sweden', 'SE', 'SWE', '{company}\r\n{firstname} {lastname}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1),
(204, 'Switzerland', 'CH', 'CHE', '', 0, 1),
(205, 'Syrian Arab Republic', 'SY', 'SYR', '', 0, 1),
(206, 'Taiwan', 'TW', 'TWN', '', 0, 1),
(207, 'Tajikistan', 'TJ', 'TJK', '', 0, 1),
(208, 'Tanzania, United Republic of', 'TZ', 'TZA', '', 0, 1),
(209, 'Thailand', 'TH', 'THA', '', 0, 1),
(210, 'Togo', 'TG', 'TGO', '', 0, 1),
(211, 'Tokelau', 'TK', 'TKL', '', 0, 1),
(212, 'Tonga', 'TO', 'TON', '', 0, 1),
(213, 'Trinidad and Tobago', 'TT', 'TTO', '', 0, 1),
(214, 'Tunisia', 'TN', 'TUN', '', 0, 1),
(215, 'Turkey', 'TR', 'TUR', '', 0, 1),
(216, 'Turkmenistan', 'TM', 'TKM', '', 0, 1),
(217, 'Turks and Caicos Islands', 'TC', 'TCA', '', 0, 1),
(218, 'Tuvalu', 'TV', 'TUV', '', 0, 1),
(219, 'Uganda', 'UG', 'UGA', '', 0, 1),
(220, 'Ukraine', 'UA', 'UKR', '', 0, 1),
(221, 'United Arab Emirates', 'AE', 'ARE', '', 0, 1),
(222, 'United Kingdom', 'GB', 'GBR', '', 1, 1),
(223, 'United States', 'US', 'USA', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{city}, {zone} {postcode}\r\n{country}', 0, 1),
(224, 'United States Minor Outlying Islands', 'UM', 'UMI', '', 0, 1),
(225, 'Uruguay', 'UY', 'URY', '', 0, 1),
(226, 'Uzbekistan', 'UZ', 'UZB', '', 0, 1),
(227, 'Vanuatu', 'VU', 'VUT', '', 0, 1),
(228, 'Vatican City State (Holy See)', 'VA', 'VAT', '', 0, 1),
(229, 'Venezuela', 'VE', 'VEN', '', 0, 1),
(230, 'Viet Nam', 'VN', 'VNM', '', 0, 1),
(231, 'Virgin Islands (British)', 'VG', 'VGB', '', 0, 1),
(232, 'Virgin Islands (U.S.)', 'VI', 'VIR', '', 0, 1),
(233, 'Wallis and Futuna Islands', 'WF', 'WLF', '', 0, 1),
(234, 'Western Sahara', 'EH', 'ESH', '', 0, 1),
(235, 'Yemen', 'YE', 'YEM', '', 0, 1),
(237, 'Democratic Republic of Congo', 'CD', 'COD', '', 0, 1),
(238, 'Zambia', 'ZM', 'ZMB', '', 0, 1),
(239, 'Zimbabwe', 'ZW', 'ZWE', '', 0, 1),
(242, 'Montenegro', 'ME', 'MNE', '', 0, 1),
(243, 'Serbia', 'RS', 'SRB', '', 0, 1),
(244, 'Aaland Islands', 'AX', 'ALA', '', 0, 1),
(245, 'Bonaire, Sint Eustatius and Saba', 'BQ', 'BES', '', 0, 1),
(246, 'Curacao', 'CW', 'CUW', '', 0, 1),
(247, 'Palestinian Territory, Occupied', 'PS', 'PSE', '', 0, 1),
(248, 'South Sudan', 'SS', 'SSD', '', 0, 1),
(249, 'St. Barthelemy', 'BL', 'BLM', '', 0, 1),
(250, 'St. Martin (French part)', 'MF', 'MAF', '', 0, 1),
(251, 'Canary Islands', 'IC', 'ICA', '', 0, 1),
(252, 'Ascension Island (British)', 'AC', 'ASC', '', 0, 1),
(253, 'Kosovo, Republic of', 'XK', 'UNK', '', 0, 1),
(254, 'Isle of Man', 'IM', 'IMN', '', 0, 1),
(255, 'Tristan da Cunha', 'TA', 'SHN', '', 0, 1),
(256, 'Guernsey', 'GG', 'GGY', '', 0, 1),
(257, 'Jersey', 'JE', 'JEY', '', 0, 1);

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
(1, 'lamvanhung', NULL, 'lamvanhung01@gmail.com', 'lamvanhung01@gmail.com', '$2b$10$ZqFTv.tGUtGvG2H8uQxPfuNnT.oECRIfMss3JjoPanzuY600whodu', '0382463233', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2020-07-28 23:47:32', NULL, NULL, '::1', NULL, NULL, NULL, 1, NULL, NULL, '2020-07-19 16:55:30', '2020-07-28 23:47:32'),
(2, 'Lam Hung Nuce 01', NULL, 'lamhungnuce01@gmail.com', 'lamhungnuce01@gmail.com', '$2b$10$5orQ7fqS5VrqXypJ6/7OZ.wCDkm.6nZmMpWQEmKoiIWEOCeGM3YNi', '0234789567', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, '::1', NULL, NULL, NULL, 1, NULL, NULL, '2020-07-28 23:51:18', NULL),
(3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', '$2b$10$LoJkOiMI9tDa8sy37wadDOhros3rZAclRNZdg2eOQ/arF0sUQx3Dy', '0123123334', 'Hoang mai, hn, vn', 230, NULL, '100000', NULL, NULL, NULL, 0, NULL, '2020-08-01 11:06:28', NULL, NULL, '::1', 73, NULL, NULL, 1, NULL, NULL, '2020-07-28 23:59:02', '2020-08-01 11:06:28'),
(4, 'leleha', NULL, 'leleha@gmail.com', 'leleha@gmail.com', '$2b$10$Oapksd5DJ3aHyIRxcrb14uj1d/OL1qJTFz2J9NiF46g2Bh.BWsWDO', '091231232', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2020-07-31 16:17:01', NULL, NULL, '::1', NULL, NULL, NULL, 1, NULL, NULL, '2020-07-31 14:57:45', '2020-07-31 16:17:01'),
(5, 'lamhungypl', NULL, 'lamhungypl@gmail.com', 'lamhungypl@gmail.com', '$2b$10$1iN02CBdY4K3ce1eNuPt0.LGcXi1UBHp9rL4AiCzSaYideWwzZqf2', '033222111', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, '::1', NULL, NULL, NULL, 1, NULL, NULL, '2020-08-02 09:08:42', NULL);

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
(1, 1, 288, 1, NULL, NULL, '2020-07-23 03:49:48', NULL),
(2, 1, 302, 1, NULL, NULL, '2020-07-23 10:03:59', NULL),
(4, 3, 298, 1, NULL, NULL, '2020-07-29 00:14:53', NULL),
(5, 3, 294, 1, NULL, NULL, '2020-07-29 00:17:49', NULL),
(6, 4, 298, 1, NULL, NULL, '2020-07-31 14:59:49', NULL);

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
(1, 'Register Content', 'Registration Successfully', '<p>Dear {name},</p>\r\n\r\n<p>Thank you for expressing your interest and registering with eshopcommerce, the faster roadway for a smarter eCommerce drive.</p>\r\n', 1, '2019-02-23 09:47:35', '2019-03-25 10:24:34', NULL, NULL),
(2, 'Forgot Password Content', 'Forgot Password', '<p>Dear {name},<br />\n&nbsp;</p>\n\n<p>Your new Password is : {xxxxxx}</p>\n', 1, '2019-02-23 09:53:09', '2019-03-06 01:06:45', NULL, NULL),
(3, 'Contact Content', 'ContactUs', 'Dear Admin,<br/><br/>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> You just received an enquiry from {name} and the details are here:\r\n<br>\r\nDetails:\r\n<br>\r\nEmail : {email}, <br>\r\nPhone Number : {phoneNumber}, <br>\r\nMessage : {message}. </p>\r\n', 0, NULL, '2019-03-25 00:49:17', NULL, NULL),
(4, 'Create Customer Login', 'User Login', '<p>Dear {name},<br />\r\n&nbsp;</p>\r\n\r\n<p>We are glad to inform you that eshopcommerce has added you as Customer.Here are your User Credentials for logging into the Application</p>\r\n\r\n<p>User ID : {username}</p>\r\n\r\n<p>Password : {password}</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>You may login using the above Email Id and Password.</p>\r\n\r\n<p>&nbsp;</p>\r\n', 0, NULL, '2019-03-05 03:00:37', NULL, NULL),
(5, 'Customer Order Content', 'Details of your recent Order', 'Dear {name},        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> Order successfully placed.        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> You have successfully placed an order for customization services. Kindly find the following details on the placed order.    </tr></tbody></table></td></tr>\r\n', 0, NULL, '2019-03-05 07:04:07', NULL, NULL),
(6, 'Admin Mail Content', 'Congratulations on your recent order', 'Dear Mr.Admin,        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> A new order has been placed.         </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> The new order {orderId} from the Customer {name} has been successfully placed. Kindly find the following details on the placed order.    </tr> </tbody></table></td> </tr> \r\n\r\n\r\n							\r\n\r\n\r\n							\r\n', NULL, NULL, NULL, NULL, NULL);

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
(54, 'Hindi', 'HIN', 'Img_1556347942580.png', 'language/', NULL, 0, 0, '2019-03-15 04:30:44', '2019-05-11 06:02:45', NULL, NULL),
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
(544, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-19 16:57:16', NULL, NULL, NULL),
(545, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-20 17:57:46', NULL, NULL, NULL),
(546, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-23 03:49:38', NULL, NULL, NULL),
(547, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-23 04:10:32', NULL, NULL, NULL),
(548, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-23 04:15:27', NULL, NULL, NULL),
(549, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-23 04:53:29', NULL, NULL, NULL),
(550, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-27 10:41:28', NULL, NULL, NULL),
(551, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-28 10:21:54', NULL, NULL, NULL),
(552, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-28 12:36:00', NULL, NULL, NULL),
(553, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-28 13:35:20', NULL, NULL, NULL),
(554, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-28 22:59:34', NULL, NULL, NULL),
(555, 1, 'lamvanhung01@gmail.com', 'lamvanhung', '::1', '2020-07-28 23:47:32', NULL, NULL, NULL),
(556, 3, 'lamhungnuce02@gmail.com', 'lamhungnuce02', '::1', '2020-07-28 23:59:45', NULL, NULL, NULL),
(557, 3, 'lamhungnuce02@gmail.com', 'lamhung', '::1', '2020-07-29 01:38:44', NULL, NULL, NULL),
(558, 4, 'leleha@gmail.com', 'leleha', '::1', '2020-07-31 14:58:31', NULL, NULL, NULL),
(559, 4, 'leleha@gmail.com', 'leleha', '::1', '2020-07-31 14:59:09', NULL, NULL, NULL),
(560, 4, 'leleha@gmail.com', 'leleha', '::1', '2020-07-31 16:17:01', NULL, NULL, NULL),
(561, 3, 'lamhungnuce02@gmail.com', 'lamhung', '::1', '2020-08-01 07:44:48', NULL, NULL, NULL),
(562, 3, 'lamhungnuce02@gmail.com', 'lamhung', '::1', '2020-08-01 10:54:23', NULL, NULL, NULL),
(563, 3, 'lamhungnuce02@gmail.com', 'lamhung', '::1', '2020-08-01 11:06:28', NULL, NULL, NULL);

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
(23, 'lenovo', 'Img_1551441402650.jpeg', 'manufacturer/', 2, 1, NULL, NULL, '2019-03-01 05:56:42', '2019-05-11 06:02:23'),
(41, 'DELL', 'Img_1552986470668.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-03-19 04:07:50', '2019-05-06 06:35:33'),
(63, 'SAMSUNG', 'Img_1557142453946.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:34:13', '2019-05-06 06:35:38'),
(65, 'SONY', 'Img_1557142513992.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:35:13', '2019-05-06 06:47:51'),
(67, 'TRESEMME', 'Img_1557142625878.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:37:05', NULL),
(68, 'AXE', 'Img_1557142652359.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:37:32', NULL),
(69, 'GUESS', 'Img_1557142692156.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:38:12', NULL),
(70, 'DICCO', 'Img_1557142708681.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:38:28', NULL),
(71, 'LANCOME', 'Img_1557142729644.jpeg', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:38:49', NULL),
(72, 'BOSS', 'Img_1557142753865.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:39:13', NULL),
(73, 'PHILIPS', 'Img_1557142776597.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:39:36', NULL),
(74, 'PARAGON', 'Img_1557142795787.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:39:55', NULL),
(75, 'BATA', 'Img_1557142813929.jpeg', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:40:13', NULL),
(76, 'ADDIDAS', 'Img_1557142832027.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:40:32', NULL),
(77, 'GODREJ', 'Img_1557142854831.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:40:54', NULL),
(79, 'RED MI', 'Img_1557142894352.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:41:34', NULL),
(80, 'OPPO', 'Img_1557142914475.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:41:54', NULL),
(81, 'PETER ENGLAND', 'Img_1557142932385.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:42:12', NULL),
(82, 'RAMRAJ', 'Img_1553152687455.jpeg', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:42:37', NULL),
(83, 'LEVIS', 'Img_1557142984015.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:43:04', NULL),
(84, 'PATHANJALI', 'Img_1557143005785.jpeg', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:43:25', NULL),
(85, 'LIFEBOY', 'Img_1557143031675.jpeg', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:43:51', NULL),
(86, 'CLINIC PLUS', 'Img_1557143046803.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:44:06', NULL),
(87, 'UDHAIYAM', 'Img_1557143066637.jpeg', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:44:26', NULL),
(88, 'ACHI', 'Img_1557143084492.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:44:44', NULL),
(89, 'BRITANIA', 'Img_1557143109064.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:45:09', NULL),
(90, 'HAMAM', 'Img_1557143204374.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:46:44', NULL),
(91, 'HATSUN', 'Img_1557143220906.jpeg', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:47:00', NULL),
(92, 'AAVIN', 'Img_1557143239110.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:47:19', NULL),
(93, 'HP', 'Img_1557143358764.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:49:18', NULL),
(94, 'OTTO', 'Img_1557143401131.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:50:01', NULL),
(95, 'MOTO', 'Img_1557144311605.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 07:05:11', NULL),
(96, 'TITAN', 'Img_1557401673782.png', 'manufacturer/', 10, 1, NULL, NULL, '2019-05-09 06:34:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1546513939916, 'CreateUserTable1546513939916'),
(2, 1546516990326, 'CreateUserGroupTable1546516990326'),
(3, 1546521833384, 'CreateUserRelationToUserGroupTable1546521833384'),
(4, 1546522725201, 'CreateCategoryTable1546522725201'),
(5, 1546523068121, 'CreateZoneToGeoZoneTable1546523068121'),
(6, 1546523201059, 'CreateCustomerGroupTable1546523201059'),
(7, 1546523577052, 'CreateCustomerIpTable1546523577052'),
(8, 1546523725119, 'CreateGeoZoneTable1546523725119'),
(9, 1546523802480, 'CreateBannerGroupTable1546523802480'),
(10, 1546524333028, 'CreateCurrencyTable1546524333028'),
(11, 1546524561001, 'CreateCustomerTable1546524561001'),
(12, 1546525248338, 'CreateAddessTable1546525248338'),
(13, 1546525786783, 'CreateBannerImageTable1546525786783'),
(14, 1546525833396, 'CreateStockStatusTable1546525833396'),
(15, 1546526076621, 'CreateBannerTable1546526076621'),
(16, 1546526936010, 'CreateBannerImageDescriptionTable1546526936010'),
(17, 1546527306595, 'CreateCustomerTransactionTable1546527306595'),
(18, 1546528787878, 'CreateProductTable1546528787878'),
(19, 1546529746397, 'CreateProductRelatedTable1546529746397'),
(20, 1546529906290, 'CreateManufacturerTable1546529906290'),
(21, 1546530096773, 'CreateProductTagTable1546530096773'),
(22, 1546578299514, 'CreateLanguageTable1546578299514'),
(23, 1546578412979, 'AddProductRelatedRelationToProductTable1546578412979'),
(24, 1546578790576, 'CreateCategoryDescriptionTable1546578790576'),
(25, 1546579410193, 'CreateProductImageTable1546579410193'),
(26, 1546579597970, 'CreateEmailTemplateTable1546579597970'),
(27, 1546579614441, 'CreateProductDescriptionTable1546579614441'),
(28, 1546579884423, 'CreateProductToCategoryTable1546579884423'),
(29, 1546580085881, 'CreateCountryTable1546580085881'),
(30, 1546580179314, 'CreateProductDiscountTable1546580179314'),
(31, 1546580427531, 'CreateProductRatingTable1546580427531'),
(32, 1546580612161, 'CreateZoneTable1546580612161'),
(33, 1546580872313, 'CreateOrderProductTable1546580872313'),
(34, 1546580970382, 'CreateSettingsTable1546580970382'),
(35, 1546581203387, 'CreateOrderOptionTable1546581203387'),
(36, 1546581429998, 'CreateOrderTotalTable1546581429998'),
(37, 1546581683040, 'CreatePageGroupTable1546581683040'),
(38, 1546581933917, 'CreateOrderHistoryTable1546581933917'),
(39, 1546582132870, 'CreateOrderStatusTable1546582132870'),
(40, 1546582513520, 'CreatePageTable1546582513520'),
(41, 1546585163896, 'AddProductImageRelationToProductTable1546585163896'),
(42, 1546585326281, 'AddProductDiscountRelationToProductTable1546585326281'),
(43, 1546585460413, 'AddProductRatingRelationToProductTable1546585460413'),
(44, 1546585572765, 'AddPageRelationToPageGroupTable1546585572765'),
(45, 1546586351105, 'CreateZoneCountryRelationToZoneGeoTable1546586351105'),
(46, 1546587376381, 'CreateOrderTable1546587376381'),
(47, 1546588310183, 'CreateCountryRelationToZoneGeoTable1546588310183'),
(48, 1546588504951, 'CreateZoneRelationToCountryTable1546588504951'),
(49, 1546590314988, 'CreateCountryRelationToSettingsTable1546590314988'),
(50, 1546590433005, 'AddPoductToCategoryRelationToProductTable1546590433005'),
(51, 1546590872444, 'AddPoductToCategoryRelationToCategoryTable1546590872444'),
(52, 1546592870823, 'AddCustomerTransactionRelationToOrderTable1546592870823'),
(53, 1546593012207, 'AddCustomerTransactionRelationToCustomerTable1546593012207'),
(54, 1546593289549, 'AddOrderProductRelationToProductTable1546593289549'),
(55, 1546593359310, 'AddOrderProductRelationToOrderTable1546593359310'),
(56, 1546593427323, 'CreateCategoryRelationToCategoryDescriptionTable1546593427323'),
(57, 1546593494331, 'AddOrderOptionRelationToOrderTable1546593494331'),
(58, 1546593946185, 'AddOrderOptionRelationToOrderProductTable1546593946185'),
(59, 1546594100673, 'CreatebannerRelationToBannerImageDescriptionTable1546594100673'),
(60, 1546594184432, 'AddOrderHistoryRelationToOrderTable1546594184432'),
(61, 1546594262644, 'AddOrderHistoryRelationToOrderStatusTable1546594262644'),
(62, 1546594411489, 'CreateBannerImageRelationToBannerImageDescriptionTable1546594411489'),
(63, 1546594752832, 'AddOrderRelationToCustomerTable1546594752832'),
(64, 1546594852304, 'AddOrderRelationToCurrencyTable1546594852304'),
(65, 1546602183498, 'CreateBannerGroupRelationToBannerTable1546602183498');

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
(1, 1, NULL, NULL, NULL, NULL, NULL, NULL, 'SPU', NULL, NULL, NULL, 'lamvanhung01@gmail.com', '0382463233', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', '230', 'Phuxuyen', '', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', '230', 'Phuxuyen', '', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-07-19 16:59:28', NULL),
(2, 1, NULL, NULL, NULL, NULL, NULL, NULL, 'SPU', NULL, NULL, NULL, 'lamvanhung01@gmail.com', '0382463233', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', '230', 'Phuxuyen', '', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', '230', 'Phuxuyen', '', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-07-19 16:59:40', NULL),
(3, 1, NULL, NULL, NULL, NULL, NULL, '3', 'SPU', 'SPU-202007193', NULL, NULL, 'lamvanhung01@gmail.com', '0382463233', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', 'Viet Nam', 'Phuxuyen', '', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', '230', 'Phuxuyen', '', NULL, NULL, '32490', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-07-19 17:00:17', '2020-07-19 17:00:17'),
(4, 1, NULL, NULL, NULL, NULL, NULL, '4', 'SPU', 'SPU-202007194', NULL, NULL, 'lamvanhung01@gmail.com', '0382463233', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', 'Viet Nam', 'Phuxuyen', '', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', '230', 'Phuxuyen', '', NULL, NULL, '32490', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-07-19 17:07:19', '2020-07-19 17:41:55'),
(5, 3, NULL, NULL, NULL, NULL, NULL, '5', 'SPU', 'SPU-202007295', NULL, NULL, 'lamhungnuce02@gmail.com', '0123123334', NULL, 'lamhung', 'nuce02', '', 'Duong giai phong', 'so 55 phai phong', 'HN', '100000', 'Viet Nam', 'Hoang mai', '', NULL, 'lamhung', 'nuce02', '', 'Duong giai phong', 'so 55 phai phong', 'HN', '100000', '230', 'Hoang mai', '', NULL, NULL, '9000', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-07-29 01:01:47', '2020-07-29 01:01:47'),
(6, 4, NULL, NULL, NULL, NULL, NULL, '6', 'SPU', 'SPU-202007316', NULL, NULL, 'leleha@gmail.com', '091231232', NULL, 'leleha', 'llll', '', 'slfwefwfw', 'sdfsdf', 'wrewerew', '1000000', 'Viet Nam', 'wrwr', '', NULL, 'leleha', 'llll', '', 'slfwefwfw', 'sdfsdf', 'wrewerew', '1000000', '230', 'wrwr', '', NULL, NULL, '10500', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-07-31 15:00:51', '2020-07-31 15:03:19'),
(7, 4, NULL, NULL, NULL, NULL, NULL, '7', 'SPU', 'SPU-202007317', NULL, NULL, 'leleha@gmail.com', '091231232', NULL, 'leleha', 'nguyen', '', 'hn', 'hn', 'hanoi', '100000', 'Viet Nam', 'hn', '', NULL, 'leleha', 'nguyen', '', 'hn', 'hn', 'hanoi', '100000', '230', 'hn', '', NULL, NULL, '292100', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-07-31 16:37:49', '2020-07-31 16:37:49'),
(8, 3, NULL, NULL, NULL, NULL, NULL, '8', 'SPU', 'SPU-202008018', NULL, NULL, 'lamhungnuce02@gmail.com', '0123123334', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', 'Viet Nam', 'HN', '', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', '230', 'HN', '', NULL, NULL, '69000', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-08-01 09:08:35', '2020-08-01 12:18:58'),
(9, 3, NULL, NULL, NULL, NULL, NULL, '9', 'SPU', 'SPU-202008019', NULL, NULL, 'lamhungnuce02@gmail.com', '0123123334', NULL, 'lamhung', 'nuce02', '', 'hn', 'hn', 'hn', '10000', 'Viet Nam', 'hn', '', NULL, 'lamhung', 'nuce02', '', 'hn', 'hn', 'hn', '10000', '230', 'hn', '', NULL, NULL, '10500', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-08-01 11:07:12', '2020-08-01 11:07:12'),
(10, 3, NULL, NULL, NULL, NULL, NULL, '10', 'SPU', 'SPU-2020080110', NULL, NULL, 'lamhungnuce02@gmail.com', '0123123334', NULL, 'lamhung', 'nuce02', '', 'Hanoi', 'HN', 'HN', '100000', 'Viet Nam', 'HN Vietnam', '', NULL, 'lamhung', 'nuce02', '', 'Hanoi', 'HN', 'HN', '100000', '230', 'HN Vietnam', '', NULL, NULL, '637000', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2020-08-01 16:22:41', '2020-08-01 16:22:41');

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
(1, 1, NULL, NULL, NULL, NULL, NULL, '4', 'SPU', 'SPU-202007194', NULL, NULL, 'lamvanhung01@gmail.com', '0382463233', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', 'Viet Nam', 'Phuxuyen', '', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', '230', 'Phuxuyen', '', NULL, NULL, '32490.0000', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2020-07-19 17:07:19', '2020-07-19 17:07:20'),
(2, 1, NULL, NULL, NULL, NULL, NULL, '4', 'SPU', 'SPU-202007194', NULL, NULL, 'lamvanhung01@gmail.com', '0382463233', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', 'Viet Nam', 'Phuxuyen', '', NULL, 'lamvanhung', 'Hung', '', 'px,hn,vn', '', 'Hanoi', '1000000', '230', 'Phuxuyen', '', NULL, NULL, '32490.0000', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2020-07-19 17:07:19', '2020-07-19 17:10:32'),
(3, 4, NULL, NULL, NULL, NULL, NULL, '6', 'SPU', 'SPU-202007316', NULL, NULL, 'leleha@gmail.com', '091231232', NULL, 'leleha', 'llll', '', 'slfwefwfw', 'sdfsdf', 'wrewerew', '1000000', 'Viet Nam', 'wrwr', '', NULL, 'leleha', 'llll', '', 'slfwefwfw', 'sdfsdf', 'wrewerew', '1000000', '230', 'wrwr', '', NULL, NULL, '10500.0000', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2020-07-31 15:00:51', '2020-07-31 15:00:51'),
(4, 3, NULL, NULL, NULL, NULL, NULL, '8', 'SPU', 'SPU-202008018', NULL, NULL, 'lamhungnuce02@gmail.com', '0123123334', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', 'Viet Nam', 'HN', '', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', '230', 'HN', '', NULL, NULL, '69000.0000', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2020-08-01 09:08:35', '2020-08-01 09:08:36'),
(5, 3, NULL, NULL, NULL, NULL, NULL, '8', 'SPU', 'SPU-202008018', NULL, NULL, 'lamhungnuce02@gmail.com', '0123123334', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', 'Viet Nam', 'HN', '', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', '230', 'HN', '', NULL, NULL, '69000.0000', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2020-08-01 09:08:35', '2020-08-01 12:18:51'),
(6, 3, NULL, NULL, NULL, NULL, NULL, '8', 'SPU', 'SPU-202008018', NULL, NULL, 'lamhungnuce02@gmail.com', '0123123334', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', 'Viet Nam', 'HN', '', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', '230', 'HN', '', NULL, NULL, '69000.0000', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2020-08-01 09:08:35', '2020-08-01 12:18:53'),
(7, 3, NULL, NULL, NULL, NULL, NULL, '8', 'SPU', 'SPU-202008018', NULL, NULL, 'lamhungnuce02@gmail.com', '0123123334', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', 'Viet Nam', 'HN', '', NULL, 'lamhung', 'nuce02', '', 'HN', 'HN', 'HaNoi', '100000', '230', 'HN', '', NULL, NULL, '69000.0000', NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2020-08-01 09:08:35', '2020-08-01 12:18:55');

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
(1, 289, 3, 'Vivo V11 Pro (Starry Night Black, 6GB RAM, 64GB Storage)', '', 1, NULL, '28990.0000', '28990.0000', NULL, NULL, NULL, NULL, '2020-07-19 17:00:17', NULL),
(2, 298, 3, 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 1, NULL, '3500.0000', '3500.0000', NULL, NULL, NULL, NULL, '2020-07-19 17:00:17', NULL),
(3, 289, 4, 'Vivo V11 Pro (Starry Night Black, 6GB RAM, 64GB Storage)', '', 1, NULL, '28990.0000', '28990.0000', NULL, NULL, NULL, NULL, '2020-07-19 17:07:19', NULL),
(4, 298, 4, 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 1, NULL, '3500.0000', '3500.0000', NULL, NULL, NULL, NULL, '2020-07-19 17:07:20', NULL),
(5, 298, 5, 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 2, NULL, '3500.0000', '7000.0000', NULL, NULL, NULL, NULL, '2020-07-29 01:01:47', NULL),
(6, 294, 5, 'Casio SA-76 KM15 Digital Portable Keyboard  (44 Keys)', '', 1, NULL, '2000.0000', '2000.0000', NULL, NULL, NULL, NULL, '2020-07-29 01:01:47', NULL),
(7, 298, 6, 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 3, NULL, '3500.0000', '10500.0000', NULL, NULL, NULL, NULL, '2020-07-31 15:00:51', NULL),
(8, 298, 7, 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 1, NULL, '3500.0000', '3500.0000', NULL, NULL, NULL, NULL, '2020-07-31 16:37:49', NULL),
(9, 289, 7, 'Bo trong cay', '', 1, NULL, '57000.0000', '57000.0000', NULL, NULL, NULL, NULL, '2020-07-31 16:37:49', NULL),
(10, 290, 7, 'bo loc nuoc do choi', '', 1, NULL, '123000.0000', '123000.0000', NULL, NULL, NULL, NULL, '2020-07-31 16:37:49', NULL),
(11, 295, 7, 'Quat chua chay thong minh', '', 1, NULL, '54000.0000', '54000.0000', NULL, NULL, NULL, NULL, '2020-07-31 16:37:49', NULL),
(12, 294, 7, 'Ten lua do choi', '', 1, NULL, '54600.0000', '54600.0000', NULL, NULL, NULL, NULL, '2020-07-31 16:37:49', NULL),
(13, 294, 8, 'Ten lua do choi', '', 3, NULL, '23000.0000', '69000.0000', NULL, NULL, NULL, NULL, '2020-08-01 09:08:36', NULL),
(14, 298, 9, 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', 3, NULL, '3500.0000', '10500.0000', NULL, NULL, NULL, NULL, '2020-08-01 11:07:12', NULL),
(15, 287, 10, 'Touch light on and off automatically', '', 2, NULL, '210000.0000', '420000.0000', NULL, NULL, NULL, NULL, '2020-08-01 16:22:41', NULL),
(16, 288, 10, 'Weather station', '', 2, NULL, '80000.0000', '160000.0000', NULL, NULL, NULL, NULL, '2020-08-01 16:22:41', NULL),
(17, 289, 10, 'Planting set', '', 1, NULL, '57000.0000', '57000.0000', NULL, NULL, NULL, NULL, '2020-08-01 16:22:41', NULL);

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
(1, 4, NULL, NULL, NULL, '32490.0000', NULL, NULL, NULL, NULL, '2020-07-19 17:07:20', NULL),
(2, 5, NULL, NULL, NULL, '9000.0000', NULL, NULL, NULL, NULL, '2020-07-29 01:01:47', NULL),
(3, 6, NULL, NULL, NULL, '10500.0000', NULL, NULL, NULL, NULL, '2020-07-31 15:00:51', NULL),
(4, 7, NULL, NULL, NULL, '292100.0000', NULL, NULL, NULL, NULL, '2020-07-31 16:37:50', NULL),
(5, 8, NULL, NULL, NULL, '69000.0000', NULL, NULL, NULL, NULL, '2020-08-01 09:08:36', NULL),
(6, 9, NULL, NULL, NULL, '10500.0000', NULL, NULL, NULL, NULL, '2020-08-01 11:07:12', NULL),
(7, 10, NULL, NULL, NULL, '637000.0000', NULL, NULL, NULL, NULL, '2020-08-01 16:22:41', NULL);

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
(130, 'COMPANY', NULL, '<p>STEM LEARNING - SUPPLY TOOLS, LEARNING, SOLUTIONS FOR STEM EDUCATION</p>\n\n<p>STEM is a new educational method being developed in the world. This educational program is applied at all educational levels to help children develop complete thinking. STEM education is always accompanied by theory and practice. What is the practice like? Don&#39;t worry, STEM LEARNING will support this.</p>\n\n<p>First of all, what do we learn about STEM education?</p>\n\n<p>STEM stands for Science (Technology), Technology (Technology), Engineering (Engineering) and Math (Mathematics). STEM educational methods will develop skills for children to apply in life both now and in the future, especially in a modern, technological environment.</p>\n\n<p>STEM LEARNING is the solution of STEM education by:</p>\n\n<p>STEM LEARNING STEM provides STEM educational tools for all ages<br />\nProducts with a combination of fun and scientific learning<br />\nReasonable price, quality commitment, in accordance with demand<br />\nProduct information is presented in detail, specific instructions<br />\nNote when choosing STEM Tools:</p>\n\n<p>Should choose toys appropriate for the child&#39;s age<br />\nChildren&#39;s habits and interests are also important in choosing the right products<br />\nRead the manual carefully before use<br />\nSTEM ACADEMY has discount programs for loyal customers and customers buying in bulk. See details<br />\nContact us :</p>\n', NULL, NULL, 'Company Profile', 'If you continue to have trouble, check out this help file for more tips.', 'company profile', NULL, 0, NULL, NULL, '2019-03-14 06:08:56', '2020-08-01 07:58:33'),
(132, 'RESOURCES', NULL, '<h2><img alt=\"\" src=\"https://www.google.com/url?sa=i&amp;source=images&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwjNqoesyoHhAhUI7HMBHQuNAu8QjRx6BAgBEAU&amp;url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&amp;psig=AOvVaw3BVX6YphWlhIlgpF7S6C_i&amp;ust=1552651106648620\" /></h2>\n\n<p>&nbsp;</p>\n\n<h2>a stock or supply of money, materials, staff, and other assets that can be drawn on by a person or organization in order to function effectivel.</h2>\n', NULL, NULL, 'Resources information', 'New Resources Page full of information @2019', ' Resources Page full of information', NULL, 1, NULL, NULL, '2019-03-14 06:16:25', '2019-03-15 00:38:22'),
(133, 'ABOUT US', NULL, '<h2>&nbsp;</h2>\n\n<p>we believe that everyone should have</p>\n\n<p>the power to create content, digital products</p>\n\n<p>and user experiences that impact the world.</p>\n\n<p>We&rsquo;re here to fuel the word&rsquo;s creativity by</p>\n\n<p>unleashing the power of content.</p>\n', NULL, NULL, 'about us', 'about us', 'The total cost of ownership for software created in this manner is reduced', NULL, 0, NULL, NULL, '2019-03-14 06:30:33', '2020-08-01 08:00:23'),
(138, 'PAGE INFO', NULL, '<p>Description of the page&nbsp;&nbsp;Description of the page&nbsp;Description of the page&nbsp;Description of the page&nbsp;Description of the page&nbsp;Description of the page&nbsp;</p>\n', NULL, NULL, '', '', '', NULL, 0, NULL, NULL, '2019-03-21 00:31:43', '2020-07-31 15:04:10');

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
(286, '555', '', 12, 2, NULL, NULL, 63, 1, '70000', '2020-07-29', 0, 'Set of 92 exam', '<p>Product: Set of 92 Experiments - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 400,000<br />\nSet of 92 experiments to create colorful interesting experiments that satisfy your baby&#39;s dream of doing science<br />\nA variety of products for use such as: fairy tears, cabbage, ,, transition colors, artificial snow ...<br />\nLet your child put on a white blouse and become a child scientist now<br />\nCompact product, absolute safety for the baby<br />\nPracticing intellect, observation ability, practical ability</p>\n\n<p>------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 04:39:46', '2020-08-01 10:02:29'),
(287, '111', '', 10, 2, NULL, NULL, 74, 1, '210000', '2020-07-31', 0, 'Touch light on and off automatically', '<p>Product: Induction Open Light - STEM Toys - Smart Assembly Toys<br />\n- STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 310,000<br />\nThe auto-opening sensor light will automatically turn on when someone enters the sensor area and will automatically turn off after 30 seconds when no people are available.</p>\n\n<p>Touch lights automatically open from wood, so you can paint another color to match the buildings in the house</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about the STEM Toy Auto-open Induction Lamp.</p>\n\n<p>The auto-opening touch light is a smart toy that is easy to assemble, improving practical ability, thinking ability and innovation ability.<br />\nDeveloping ability: intellect, grasping, crafting, visioning, practicing hobbies, senses, emotions, hand-eye coordination</p>\n\n<p>Wood products are absolutely safe for children</p>\n\n<p>------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 04:50:42', '2020-08-01 10:02:43'),
(288, '666', '', 16, 3, NULL, NULL, 65, 1, '80000', '2020-07-30', 0, 'Weather station', '<p>Product: Meteorological Station - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 157,000<br />\nMeteorological Station STEM - is a hand-made DIY toy model with detailed instructions for children assembling by hand,<br />\nexercise children&#39;s ability to practice and observe, and train children&#39;s patience. ability to think and be able to innovate.</p>\n\n<p>STEM Meteorological Station is a versatile 6-in-1 product that helps children learn about wind, rain, temperature, greenhouse effects and water circulation.</p>\n\n<p>1. Anemometer</p>\n\n<p>2. Wind speed meter</p>\n\n<p>3. Thermometer measures temperature</p>\n\n<p>4. Rainfall meter</p>\n\n<p>5. The greenhouse effect</p>\n\n<p>6. The closed ecosystem of the tree</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about STEM Meteorological Station of STEM Toys.</p>\n\n<p>STEM weather station is entirely made of ABS, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 04:58:37', '2020-08-01 10:06:29'),
(289, '777', '', 98, 2, NULL, NULL, 72, 1, '57000', NULL, 0, 'Planting set', '<p>Product: STEM Planting Set - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 157,000<br />\nSTEM Planting Kit - is a hand-made DIY toy model with detailed instructions for children assembling by hand,<br />\nexercise children&#39;s ability to practice and observe, and train children&#39;s patience. ability to think and innovate</p>\n\n<p>STEM Plant Set is a product for children to see the growth of the tree, see the roots, stems, leaves. Supplement biological knowledge for children.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about STEM Planting Kit of STEM Toys.</p>\n\n<p>STEM tree planting kit is entirely made of ABS plastic, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 05:10:27', '2020-08-01 10:03:21'),
(290, '888', '', 45, 2, NULL, NULL, 73, 1, '123000', '2020-07-29', 0, 'toy water filter', '<p>Product: STEM Water Filter - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 133,000<br />\nSTEM water filter - is a hand-made DIY toy model with detailed instructions for children assembling by hand,<br />\nexercise children&#39;s ability to practice and observe, and train their patience.</p>\n\n<p>STEM water filters are models of filtration from dirty water to clean, usable water.<br />\n&nbsp;Development of biological and chemical knowledge is very helpful. It is suitable for demonstration teaching in students&#39; classroom.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about STEM Water Filter of STEM Toys.<br />\nSTEM water filter made entirely of ABS plastic, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, 0, 1, 1, 1, NULL, NULL, '2019-05-10 05:23:03', '2020-08-01 10:03:44'),
(292, '222', '', 10, 3, NULL, NULL, 79, 1, '34500', '2020-07-29', 0, '3D screen model', '<p>Product: 3D Solar System Model - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 133,000<br />\n3D solar system model - is a 3D solar system model, simulating the solar system, assembled and created by the children themselves.</p>\n\n<p>3D solar system model helps children learn about the solar system, the names of 9 planets, distances, diameters and other useful information.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about STEM Missiles of STEM Toys.</p>\n\n<p>The 3D solar system model is a smart toy that is easy to assemble, improving practical ability, thinking ability and innovation ability.<br />\n3D solar system model is entirely made of ABS plastic, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 05:51:02', '2020-08-01 10:04:02'),
(293, '444', '', 41, 1, NULL, NULL, 63, 1, '45321', '2020-07-24', 0, 'Environmental battery', '<p>Product: STEM Environmental Battery - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 42,000<br />\nSTEM environmental battery - intellectual development STEM toy</p>\n\n<p>STEM environmental battery - is a hand-made DIY toy model with detailed instructions for children assembling by hand,<br />\n&nbsp;exercise children&#39;s ability to practice and observe, and train their patience.</p>\n\n<p>STEM environmental battery is a versatile product that is tested in a series of products: generating electricity from potatoes, lemons, water bottles, coins, soft drinks ...</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about STEM environmental electric battery of STEM Toys.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 06:04:50', '2020-08-01 10:06:35'),
(294, '333', '', 12, 2, NULL, NULL, 75, 1, '54600', '2020-07-31', 0, 'Toy rocket', '<p>Product: STEM Missile - STEM Toy - Smart Toy - Assembly Toy - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 123,000<br />\nSTEM rocket - is a hand-made DIY toy model with detailed instructions for children to assemble by hand, train their ability to practice and observe, and train their patience. innovation ability, creative thinking</p>\n\n<p>STEM rocket helps children learn about air pressure and uses pressure to launch a rocket into the sky. Also learn about oblique throw equations, experiment with tilt angles to throw the furthest.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children. Let&#39;s assemble &amp; learn with your child about STEM Missiles of STEM Toys.<br />\nSTEM rocket is completely ABS plastic, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 1, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 06:07:25', '2020-08-01 10:22:35'),
(295, '999', '', 34, 1, NULL, NULL, 79, 1, '54000', '2020-07-31', 0, 'Smart fire fan', '<p>Product: Intelligent Fire Fan - STEM Toys - Smart Toys - Assembly Toys - STEM LEARNING<br />\n--------------------PRODUCT INFORMATION------------------<br />\nPrice: 186,000<br />\nSmart fire fan is a hand-made DIY toy model with detailed instructions for children to assemble by hand,<br />\nexercise children&#39;s ability to practice and observe, and train children&#39;s patience. ability to think and innovate</p>\n\n<p>The intelligent fire-fighting fan mainly uses infrared flame sensor to detect the fire, then transmits the low signal to the relay module, then drives the horn through the relay to emit alarm and audible sounds. .<br />\nAt the same time, the motor drives the propeller to blow the fire source.<br />\nIt is suitable for demonstration in classroom teaching by students, using small-scale inventions, manual labor and small production.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about STEM Toys Smart Fire Fan.<br />\nIntelligent fire-fighting fan is completely made of ABS plastic, absolutely safe for children to use.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, 2, 1, 1, 1, NULL, NULL, '2019-05-10 06:18:17', '2020-08-01 10:04:47'),
(299, '1000', '', 45, 1, NULL, NULL, 63, 1, '76000', '2020-07-31', 0, 'Solar boat', '<p>Today, clean energy - solar energy has been applied a lot in life, contributing to environmental protection and Earth protection.<br />\nSo where does solar power come from? Let your child answer that question through the &quot;Solar Boat&quot; product.</p>\n\n<p>Solar batteries are capable of converting solar energy (energy from light) into electricity.<br />\nbased on the principle of the photovoltaic emission electrons when illuminated. Photovoltaic batteries (solar cells) are made from photovoltaic cells.<br />\nThe solar boat is an easy-to-assemble smart toy that improves hands-on, thinking, and innovation.<br />\nSolar boat is entirely made of ABS plastic, absolutely safe for children to use.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about the STEM Toy Solar Boat.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, 0, 1, 0, 1, NULL, NULL, '2019-05-10 06:51:47', '2020-08-01 10:05:04'),
(300, '1234', '', 25, 3, NULL, NULL, 75, 1, '89000', '2020-07-30', 0, 'Password type box', '<p>Today, clean energy - solar energy has been applied a lot in life, contributing to environmental protection and Earth protection.<br />\nSo where does solar power come from? Let your child answer that question through the &quot;Solar Boat&quot; product.</p>\n\n<p>Solar batteries are capable of converting solar energy (energy from light) into electricity.<br />\nbased on the principle of the photovoltaic emission electrons when illuminated. Photovoltaic batteries (solar cells) are made from photovoltaic cells.<br />\nThe solar boat is an easy-to-assemble smart toy that improves hands-on, thinking, and innovation.<br />\nSolar boat is entirely made of ABS plastic, absolutely safe for children to use.</p>\n\n<p>A complete product - A smart toy - Evoking profound knowledge for children.<br />\nLet&#39;s assemble &amp; learn with your child about the STEM Toy Solar Boat.<br />\n------<br />\nRemember: &quot;Scientific knowledge + educational ability = future competitiveness&quot;<br />\nSee product details at:</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 07:19:51', '2020-08-01 10:05:32'),
(302, '3467', '', 34, 1, NULL, NULL, 83, 1, '123000', '2020-07-31', 0, 'Robot bionic', '<p>The bionic wind robot is a hand-made DIY toy model with detailed instructions for children assembling by hand,<br />\nexercise children&#39;s ability to practice and observe, and train their patience.</p>\n\n<p>The Viking bionic wind robot doesn&#39;t need any electric fuel.<br />\nIt cares about the wind, the wind like its snacks, it relies on wind energy to run.<br />\nRely on mechanical principles and natural wind to move forward.<br />\nThe intelligence of the structure lies in the proper use of the balance to convert physical variables, and the energy conversion rate is very high.</p>\n\n<p>Production method: specially designed, no need to use glue, safe and convenient. A clever and exciting assembly journey of the product.</p>\n\n<p>Bionics is primarily for observing, studying and simulating the special abilities of the organism in nature, including structure, principles, behavior, various organ functions, chemical processes and physics, energy supplies, memory and the movements of organisms. Therefore, scientists use these principles to provide new design ideas, working principles and scientific and technical methods of system architecture to create new ones.</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, '', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 07:34:55', '2020-07-31 15:56:33'),
(303, '123123', 'weq', 45, 2, NULL, NULL, 92, 1, '12000', '2020-08-01', 1, 'San pham nhieu danh muc', '<p>dsadsa</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, 'vn', NULL, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2020-08-01 11:10:47', NULL);

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
(354, 291, 1, 1, '35000.0000', '2019-05-11', '2019-05-15', NULL, NULL, NULL, NULL, NULL),
(370, 298, 0, 0, '0.0000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(381, 285, 0, 0, '0.0000', NULL, NULL, NULL, NULL, NULL, '2019-05-11 07:29:15', NULL),
(395, 302, 1, 1, '14000.0000', '2020-07-30', '2020-08-02', NULL, NULL, NULL, '2020-07-31 15:56:33', NULL),
(396, 294, 12, 1, '21000.0000', '2020-07-31', '2020-08-03', NULL, NULL, NULL, '2020-08-01 10:02:13', NULL),
(398, 287, 3, 1, '20000.0000', '2020-07-31', '2020-08-01', NULL, NULL, NULL, '2020-08-01 10:02:43', NULL),
(399, 288, 4, 1, '35000.0000', '2020-07-30', '2020-08-04', NULL, NULL, NULL, '2020-08-01 10:02:58', NULL),
(400, 289, 1, 1, '54000.0000', '2020-07-21', '2020-08-06', NULL, NULL, NULL, '2020-08-01 10:03:21', NULL),
(401, 290, 1, 1, '12300.0000', '2020-07-29', '2020-08-03', NULL, NULL, NULL, '2020-08-01 10:03:44', NULL),
(402, 292, 2, 1, '20000.0000', '2020-07-29', '2020-07-31', NULL, NULL, NULL, '2020-08-01 10:04:02', NULL),
(403, 293, 12, 1, '12345.0000', '2020-07-31', '2020-08-03', NULL, NULL, NULL, '2020-08-01 10:04:19', NULL),
(404, 295, 1, 1, '35000.0000', '2020-07-30', '2020-08-04', NULL, NULL, NULL, '2020-08-01 10:04:47', NULL),
(405, 299, 1, 1, '45000.0000', '2020-07-29', '2020-08-03', NULL, NULL, NULL, '2020-08-01 10:05:04', NULL),
(406, 300, 1, 1, '56000.0000', '2020-07-30', '2020-08-04', NULL, NULL, NULL, '2020-08-01 10:05:32', NULL),
(407, 303, 12, 1, '10000.0000', '2020-08-01', '2020-08-06', NULL, NULL, NULL, '2020-08-01 11:10:47', NULL);

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
(1951, 296, 'Img_1557487542287.jpeg', 'Product/BabyandKids/Toys/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:31:35', NULL),
(1955, 298, 'Img_1557488489793.jpeg', 'Product/BabyandKids/Toys/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:43:29', NULL),
(1956, 298, 'Img_1557488500018.jpeg', 'Product/BabyandKids/Toys/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:43:29', NULL),
(1983, 285, 'Img_1557476594786.jpeg', 'Product/Electronics/Camera/', 1, NULL, NULL, NULL, NULL, '2019-05-11 07:29:15', NULL),
(1984, 285, 'Img_1557476583444.jpeg', 'Product/Electronics/Camera/', 0, NULL, NULL, NULL, NULL, '2019-05-11 07:29:15', NULL),
(2000, 302, 'Img_1596185762120.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-07-31 15:56:33', NULL),
(2001, 294, 'Img_1596184214751.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:02:13', NULL),
(2002, 286, 'Img_1596184625847.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:02:29', NULL),
(2003, 287, 'Img_1596183443080.jpeg', 'Product/sanpham2tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:02:43', NULL),
(2004, 288, 'Img_1596184788512.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:02:58', NULL),
(2005, 289, 'Img_1596184923009.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:03:21', NULL),
(2006, 290, 'Img_1596185092980.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:03:44', NULL),
(2007, 292, 'Img_1596184021548.jpeg', 'Product/4tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:04:02', NULL),
(2008, 293, 'Img_1596184397808.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:04:19', NULL),
(2009, 295, 'Img_1596185246263.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:04:47', NULL),
(2010, 299, 'Img_1596185419864.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:05:04', NULL),
(2011, 300, 'Img_1596185617093.jpeg', 'Product/4 tuoi/', 1, NULL, NULL, NULL, NULL, '2020-08-01 10:05:32', NULL),
(2012, 303, 'Img_1557491249919.jpeg', '', 1, NULL, NULL, NULL, NULL, '2020-08-01 11:10:47', NULL);

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

--
-- Dumping data for table `product_related`
--

INSERT INTO `product_related` (`related_id`, `product_id`, `related_product_id`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(592, 296, 294, NULL, NULL, NULL, '2019-05-10 06:31:35', NULL),
(593, 298, 296, NULL, NULL, NULL, '2019-05-10 06:43:29', NULL),
(594, 298, 294, NULL, NULL, NULL, '2019-05-10 06:43:29', NULL);

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

--
-- Dumping data for table `product_special`
--

INSERT INTO `product_special` (`product_special_id`, `product_id`, `customer_group_id`, `priority`, `price`, `date_start`, `date_end`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(402, 296, NULL, 0, '0.00', NULL, NULL, NULL, NULL, NULL, NULL),
(404, 298, NULL, 0, '0.00', NULL, NULL, NULL, NULL, NULL, NULL),
(415, 285, NULL, 1, '19000.00', '2019-05-10', '2019-05-31', NULL, NULL, '2019-05-11 07:29:15', NULL),
(427, 302, NULL, 2, '28000.00', '2020-07-30', '2020-08-08', NULL, NULL, '2020-07-31 15:56:33', NULL),
(429, 286, NULL, 2, '55000.00', '2020-07-30', '2020-08-03', NULL, NULL, '2020-08-01 10:02:29', NULL),
(430, 287, NULL, 1, '20000.00', '2020-07-31', '2020-09-08', NULL, NULL, '2020-08-01 10:02:43', NULL),
(432, 289, NULL, 1, '50000.00', '2020-07-30', '2020-08-05', NULL, NULL, '2020-08-01 10:03:21', NULL),
(433, 290, NULL, 2, '12500.00', '2020-07-30', '2020-08-04', NULL, NULL, '2020-08-01 10:03:45', NULL),
(434, 292, NULL, 3, '21000.00', '2020-07-30', '2020-08-03', NULL, NULL, '2020-08-01 10:04:02', NULL),
(435, 293, NULL, 1, '12346.00', '2020-07-30', '2020-08-04', NULL, NULL, '2020-08-01 10:04:19', NULL),
(436, 295, NULL, 2, '35000.00', '2020-07-30', '2020-08-04', NULL, NULL, '2020-08-01 10:04:47', NULL),
(437, 299, NULL, 1, '43000.00', '2020-07-30', '2020-08-04', NULL, NULL, '2020-08-01 10:05:05', NULL),
(438, 300, NULL, 1, '32000.00', '2020-07-30', '2020-08-04', NULL, NULL, '2020-08-01 10:05:32', NULL),
(439, 303, NULL, 1, '13000.00', '2020-08-01', '2020-08-06', NULL, NULL, '2020-08-01 11:10:47', NULL);

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
(2246, 296, 49, 1, NULL, NULL, '2019-05-10 06:31:35', NULL),
(2250, 298, 17, 1, NULL, NULL, '2019-05-10 06:43:29', NULL),
(2251, 298, 48, 1, NULL, NULL, '2019-05-10 06:43:29', NULL),
(2252, 298, 3, 1, NULL, NULL, '2019-05-10 06:43:29', NULL),
(2283, 285, 44, 1, NULL, NULL, '2019-05-11 07:29:15', NULL),
(2284, 285, 4, 1, NULL, NULL, '2019-05-11 07:29:15', NULL),
(2285, 285, 16, 1, NULL, NULL, '2019-05-11 07:29:15', NULL),
(2301, 302, 96, 1, NULL, NULL, '2020-07-31 15:56:33', NULL),
(2302, 294, 95, 1, NULL, NULL, '2020-08-01 10:02:13', NULL),
(2304, 287, 93, 1, NULL, NULL, '2020-08-01 10:02:43', NULL),
(2305, 288, 95, 1, NULL, NULL, '2020-08-01 10:02:58', NULL),
(2306, 289, 95, 1, NULL, NULL, '2020-08-01 10:03:21', NULL),
(2307, 290, 95, 1, NULL, NULL, '2020-08-01 10:03:44', NULL),
(2308, 292, 94, 1, NULL, NULL, '2020-08-01 10:04:02', NULL),
(2309, 293, 96, 1, NULL, NULL, '2020-08-01 10:04:19', NULL),
(2310, 295, 94, 1, NULL, NULL, '2020-08-01 10:04:47', NULL),
(2311, 299, 95, 1, NULL, NULL, '2020-08-01 10:05:04', NULL),
(2312, 300, 95, 1, NULL, NULL, '2020-08-01 10:05:32', NULL),
(2313, 303, 1, 1, NULL, NULL, '2020-08-01 11:10:47', NULL),
(2314, 303, 3, 1, NULL, NULL, '2020-08-01 11:10:47', NULL),
(2315, 303, 4, 1, NULL, NULL, '2020-08-01 11:10:47', NULL);

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
(1, 289, 1, 'lamvanhung', NULL, 'lamvanhung01@gmail.com', 'lamvanhung01@gmail.com', 382463233, NULL, NULL, NULL, NULL, '2020-07-23 08:43:55', NULL),
(2, 288, 1, 'lamvanhung', NULL, 'lamvanhung01@gmail.com', 'lamvanhung01@gmail.com', 382463233, NULL, NULL, NULL, NULL, '2020-07-23 08:44:45', NULL),
(3, 292, 1, 'lamvanhung', NULL, 'lamvanhung01@gmail.com', 'lamvanhung01@gmail.com', 382463233, NULL, NULL, NULL, NULL, '2020-07-23 09:51:19', NULL),
(4, 302, 1, 'lamvanhung', NULL, 'lamvanhung01@gmail.com', 'lamvanhung01@gmail.com', 382463233, NULL, NULL, NULL, NULL, '2020-07-23 10:04:17', NULL),
(5, 288, 1, 'lamvanhung', NULL, 'lamvanhung01@gmail.com', 'lamvanhung01@gmail.com', 382463233, NULL, NULL, NULL, NULL, '2020-07-23 10:19:21', NULL),
(6, 288, 1, 'lamvanhung', NULL, 'lamvanhung01@gmail.com', 'lamvanhung01@gmail.com', 382463233, NULL, NULL, NULL, NULL, '2020-07-23 10:36:24', NULL),
(7, 287, 1, 'lamvanhung', NULL, 'lamvanhung01@gmail.com', 'lamvanhung01@gmail.com', 382463233, NULL, NULL, NULL, NULL, '2020-07-28 09:11:00', NULL),
(8, 298, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:15:28', NULL),
(9, 298, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:15:38', NULL),
(10, 294, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:16:19', NULL),
(11, 294, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:17:47', NULL),
(12, 298, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:19:07', NULL),
(13, 294, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:19:14', NULL),
(14, 292, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:22:28', NULL),
(15, 293, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:22:57', NULL),
(16, 294, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:23:12', NULL),
(17, 294, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:28:30', NULL),
(18, 294, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:30:31', NULL),
(19, 298, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:30:43', NULL),
(20, 294, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:30:49', NULL),
(21, 298, 3, 'lamhungnuce02', NULL, 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, NULL, NULL, NULL, NULL, '2020-07-29 00:31:11', NULL),
(22, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-07-29 00:56:30', NULL),
(23, 294, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-07-29 00:56:30', NULL),
(24, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-07-29 00:59:28', NULL),
(25, 294, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-07-29 00:59:29', NULL),
(26, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-07-29 00:59:45', NULL),
(27, 294, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-07-29 00:59:47', NULL),
(28, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-07-29 01:03:32', NULL),
(29, 294, 4, 'leleha', NULL, 'leleha@gmail.com', 'leleha@gmail.com', 91231232, NULL, NULL, NULL, NULL, '2020-07-31 15:57:44', NULL),
(30, 298, 4, 'leleha', NULL, 'leleha@gmail.com', 'leleha@gmail.com', 91231232, NULL, NULL, NULL, NULL, '2020-07-31 16:36:00', NULL),
(31, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 07:50:24', NULL),
(32, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 07:51:19', NULL),
(33, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 07:53:54', NULL),
(34, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 08:21:44', NULL),
(35, 294, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 08:21:45', NULL),
(36, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 08:22:38', NULL),
(37, 294, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 08:22:39', NULL),
(38, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 08:23:01', NULL),
(39, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 08:23:12', NULL),
(40, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 08:47:44', NULL),
(41, 289, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 09:05:20', NULL),
(42, 294, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 09:06:19', NULL),
(43, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 10:53:35', NULL),
(44, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 11:06:37', NULL),
(45, 298, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 11:06:50', NULL),
(46, 303, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 11:11:25', NULL),
(47, 289, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 12:16:02', NULL),
(48, 290, 3, 'lamhung', 'nuce02', 'lamhungnuce02@gmail.com', 'lamhungnuce02@gmail.com', 123123334, 'Hoang mai, hn, vn', NULL, NULL, NULL, '2020-08-01 12:16:28', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `category_description`
--
ALTER TABLE `category_description`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category_path`
--
ALTER TABLE `category_path`
  MODIFY `category_path_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=564;

--
-- AUTO_INCREMENT for table `manufacturer`
--
ALTER TABLE `manufacturer`
  MODIFY `manufacturer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

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
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `order_history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_log`
--
ALTER TABLE `order_log`
  MODIFY `order_log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `order_option`
--
ALTER TABLE `order_option`
  MODIFY `order_option_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_product`
--
ALTER TABLE `order_product`
  MODIFY `order_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `order_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_total`
--
ALTER TABLE `order_total`
  MODIFY `order_total_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `page`
--
ALTER TABLE `page`
  MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

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
  MODIFY `product_discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=408;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2013;

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
  MODIFY `related_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=595;

--
-- AUTO_INCREMENT for table `product_special`
--
ALTER TABLE `product_special`
  MODIFY `product_special_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=440;

--
-- AUTO_INCREMENT for table `product_tag`
--
ALTER TABLE `product_tag`
  MODIFY `product_tag_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_to_category`
--
ALTER TABLE `product_to_category`
  MODIFY `product_to_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2316;

--
-- AUTO_INCREMENT for table `product_view_log`
--
ALTER TABLE `product_view_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

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
